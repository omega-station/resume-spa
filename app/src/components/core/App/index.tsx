import { default as ApolloClient, default as DefaultClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Router from '../Router';
import StyledApp from './style';

const client: DefaultClient<unknown> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${process.env.REACT_APP_ENDPOINT_GRAPHQL_API}/graphql`,
});

const App = (): JSX.Element => {
  return (
    <StyledApp>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </StyledApp>
  );
};

export default App;
