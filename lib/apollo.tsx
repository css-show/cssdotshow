import React, { useMemo } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from '@apollo/client';
import { NextPage, NextApiRequest, NextApiResponse } from 'next';

export interface GraphQlContext {
  req: NextApiRequest;
  res: NextApiResponse;
}

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createIsomorphicLink(context: GraphQlContext | undefined) {
  /**
   * SSG and SSR
   */
  // if (typeof window === 'undefined') {
  //   // eslint-disable-next-line @typescript-eslint/no-var-requires
  //   const { SchemaLink } = require('@apollo/client/link/schema');
  //   // eslint-disable-next-line @typescript-eslint/no-var-requires
  //   const { graphQlSchema } = require('./schema');
  //   return new SchemaLink({ schema: graphQlSchema, context });
  // }

  /**
   * Client-side
   */
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // const { HttpLink } = require('@apollo/client');
  return new HttpLink({
    uri: 'https://api.spacex.land/graphql/',
    credentials: 'same-origin',
  });
}

const cache = new InMemoryCache();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createApolloClient(context?: GraphQlContext): ApolloClient<any> {
  return new ApolloClient({
    /**
     * Enable SSR mode when not running on the client-side
     */
    ssrMode: typeof window === 'undefined',
    link: createIsomorphicLink(context),
    cache,
  });
}

export function initializeApollo(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialState: any = null,
  // Pages with Next.js data fetching methods, like `getStaticProps`, can send
  // a custom context which will be used by `SchemaLink` to server render pages
  context?: GraphQlContext
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): ApolloClient<any> {
  const _apolloClient = apolloClient ?? createApolloClient(context);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  /**
   * SSG and SSR
   * Always create a new Apollo Client
   */
  if (typeof window === 'undefined') {
    return _apolloClient;
  }

  // Create the Apollo Client once in the client
  apolloClient = apolloClient ?? _apolloClient;

  return apolloClient;
}

export const getApolloClient = initializeApollo;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useApollo(initialState: any) {
  const apolloStore = useMemo(() => initializeApollo(initialState), [
    initialState,
  ]);
  return apolloStore;
}

export const withApollo = (Comp: NextPage) => (props: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apolloState: any;
}) => {
  const apolloStore = useApollo(props.apolloState);
  return (
    <ApolloProvider client={apolloStore}>
      <Comp />
    </ApolloProvider>
  );
};
