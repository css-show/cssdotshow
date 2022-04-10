import { Handler } from './handler';

export type APIGatewayHandler<T> = Handler<APIGatewayEvent, T>;

export interface APIGatewayEventHeaders {
  [name: string]: string;
}

// 触发云函数的事件
export interface APIGatewayEvent {
  headers: APIGatewayEventHeaders;
  httpMethod: string;
  isBase64Encoded: boolean;
  multiValueHeaders: { [name: string]: string[] } | null;
  path: string;
  queryStringParameters: { [name: string]: string } | null;
  requestContext: APIGatewayRequestContext;
  body?: string | null | undefined;
}

// 触发云函数的事件 - RequestContext
export interface APIGatewayRequestContext {
  appId: string;
  envId: string;
  requestId: string | undefined;
  uin: string | undefined;
}

// 触发云函数的事件 - Result
export interface APIGatewayProxyStructuredResult {
  statusCode: number;
  headers: { [name: string]: string };
  body: string;
  isBase64Encoded: boolean;
}
