import React from 'react';
import PageType4 from '..';
import { ApolloProvider, client } from 'utility/apollo';

export const Default = () => <PageType4 />;
Default.storyName = 'default';

export default {
  component: PageType4,
  title: 'page/Page/PageType4',
  decorators: [
    (Story: Function) => (
      <ApolloProvider client={client}>
        <Story />
      </ApolloProvider>
    ),
  ],
};
