import React from 'react';
import PageType1 from '..';
import { ApolloProvider, client } from '../../../../utility/apollo';

export const Default = () => <PageType1 />;
Default.storyName = 'default';

export default {
  component: PageType1,
  title: 'page/Page/PageType1',
  decorators: [
    (Story: Function) => (
      <ApolloProvider client={client}>
        <Story />
      </ApolloProvider>
    ),
  ],
};
