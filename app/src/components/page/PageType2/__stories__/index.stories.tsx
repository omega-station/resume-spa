import React from 'react';
import PageType2 from '..';
import { ApolloProvider, client } from 'utility/apollo';

export const Default = () => <PageType2 />;
Default.storyName = 'default';

export default {
  component: PageType2,
  title: 'page/Page/PageType2',
  decorators: [
    (Story: Function) => (
      <ApolloProvider client={client}>
        <Story />
      </ApolloProvider>
    ),
  ],
};
