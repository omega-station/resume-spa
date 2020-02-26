import { default as ApolloClient, default as DefaultClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Router from '../Router';
import GithubCorner from 'react-github-corner';
import StyledApp from './style';

const client: DefaultClient<unknown> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://dev.resume.omegastation.ca/graphql',
});

const App = (): JSX.Element => {
  return (
    <StyledApp>
      <GithubCorner href="https://github.com/omega-station/resume-spa" size="120" />
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </StyledApp>
  );
};

export default App;
