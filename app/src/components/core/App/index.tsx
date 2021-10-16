import React from 'react';
import { ApolloProvider, client } from 'utility/apollo';
import Router from '../Router';
import { ParallaxProvider } from 'react-scroll-parallax';

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <ParallaxProvider>
        <Router />
      </ParallaxProvider>
    </ApolloProvider>
  );
};

export default App;
