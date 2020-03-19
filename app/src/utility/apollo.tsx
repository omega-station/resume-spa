import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import React from 'react';
import { ApolloProvider } from 'react-apollo';

const uri: string = `${process.env.REACT_APP_ENDPOINT_GRAPHQL_API}/graphql`;
const link: ApolloLink = createHttpLink({ uri });

const cache = new InMemoryCache({
  addTypename: false,
  fragmentMatcher: { match: () => true },
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const withProvider = (component: Function) => <ApolloProvider client={client}>{component()}</ApolloProvider>;

export { ApolloProvider, cache, client, withProvider };
