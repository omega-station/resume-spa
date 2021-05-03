import React from 'react';
import PageType3 from '..';
import { ApolloProvider, client } from '../../../../utility/apollo';

export const Default = () => <PageType3 />;
Default.storyName = 'default';

export default {
  component: PageType3,
  title: 'page/Page/PageType3',
  decorators: [
    (Story: Function) => (
      <ApolloProvider client={client}>
        <Story />
      </ApolloProvider>
    ),
  ],
};
