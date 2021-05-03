import React from 'react';
import Header from '..';
import { ApolloProvider, client } from '../../../../../../utility/apollo';

export const Default = () => <Header />;
Default.storyName = 'default';

export default {
  component: Header,
  title: 'page/Page/PageType4/Header',
  decorators: [
    (Story: Function) => (
      <ApolloProvider client={client}>
        <Story />
      </ApolloProvider>
    ),
  ],
};
