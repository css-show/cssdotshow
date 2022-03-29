import {
  // This has been added as a global in node 15+
  AbortController,
  Headers as NodeHeaders,
  Request as NodeRequest,
} from '@remix-run/node';
import type {
  AppLoadContext,
  ServerBuild,
  ServerPlatform,
} from '@remix-run/server-runtime';
import { createRequestHandler as createRemixRequestHandler } from '@remix-run/server-runtime';
import type { Response as NodeResponse } from '@remix-run/node';
import {
  APIGatewayEvent,
  APIGatewayEventHeaders,
  APIGatewayHandler,
  APIGatewayProxyStructuredResult,
} from './trigger';
import { isBinaryType } from './binary-types';

/**
 * A function that returns the value to use as `context` in route `loader` and
 * `action` functions.
 *
 * You can think of this as an escape hatch that allows you to pass
 * environment/platform-specific values through to your loader/action.
 */
export interface GetLoadContextFunction {
  (event: APIGatewayEvent): AppLoadContext;
}

export type RequestHandler = ReturnType<typeof createRequestHandler>;

/**
 * Returns a request handler for Architect that serves the response using
 * Remix.
 */
export function createRequestHandler({
  build,
  getLoadContext,
  mode = process.env.NODE_ENV,
}: {
  build: ServerBuild;
  getLoadContext?: GetLoadContextFunction;
  mode?: string;
}): APIGatewayHandler<APIGatewayProxyStructuredResult> {
  let platform: ServerPlatform = {};
  let handleRequest = createRemixRequestHandler(build, platform, mode);

  return async (event: APIGatewayEvent) => {
    let abortController = new AbortController();
    let request = createRemixRequest(event, abortController);
    let loadContext =
      typeof getLoadContext === 'function' ? getLoadContext(event) : undefined;

    let response = (await handleRequest(
      request as unknown as Request,
      loadContext
    )) as unknown as NodeResponse;

    return sendRemixResponse(response, abortController);
  };
}

const obj2search = (search: { [key: string]: string }) =>
  Object.entries(search).reduce((pvalue, current) => {
    const [name, value] = current || [];
    return pvalue ? `${pvalue}&${name}=${value}` : `${name}=${value}`;
  }, '');

export function createRemixRequest(
  event: APIGatewayEvent,
  abortController?: AbortController
): NodeRequest {
  let host = event.headers.host;
  let protocol = event.headers['x-forwarded-proto'] || 'https';
  let search = event.queryStringParameters
    ? `?${obj2search(event.queryStringParameters)}`
    : '';
  let url = new URL(event.path + search, `${protocol}://${host}`);

  return new NodeRequest(url.href, {
    method: event.httpMethod,
    headers: createRemixHeaders(event.headers),
    body:
      event.body && event.isBase64Encoded
        ? Buffer.from(event.body, 'base64').toString()
        : event.body || '',
    abortController,
    signal: abortController?.signal,
  });
}

export function createRemixHeaders(
  requestHeaders: APIGatewayEventHeaders
): NodeHeaders {
  let headers = new NodeHeaders();

  for (let [header, value] of Object.entries(requestHeaders)) {
    if (value) {
      headers.append(header, value);
    }
  }

  return headers;
}

export async function sendRemixResponse(
  response: NodeResponse,
  abortController: AbortController
): Promise<APIGatewayProxyStructuredResult> {
  if (abortController.signal.aborted) {
    response.headers.set('Connection', 'close');
  }

  let contentType = response.headers.get('content-type');
  let isBinary = isBinaryType(contentType);
  let body;
  let isBase64Encoded = false;

  if (isBinary) {
    let blob = await response.arrayBuffer();
    body = Buffer.from(blob).toString('base64');
    isBase64Encoded = true;
  } else {
    body = await response.text();
  }

  return {
    statusCode: response.status,
    headers: Object.fromEntries(response.headers),
    body,
    isBase64Encoded,
  };
}
