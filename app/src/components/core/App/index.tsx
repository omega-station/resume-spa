import React from 'react';
import { ApolloProvider, client } from '../../../utility/apollo';
import Router from '../Router';
import StyledApp from './style';

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
