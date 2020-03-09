import React from 'react';
import { ApolloProvider, client } from '../../../utility/apollo';
import Router from '../Router';

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
};

export default App;
