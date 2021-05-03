import React from 'react';
import Footer from '..';
import { ApolloProvider, client } from '../../../../../../utility/apollo';

export const Default = () => <Footer />;
Default.storyName = 'default';

export default {
  component: Footer,
  title: 'page/Page/PageType4/Footer',
  decorators: [
    (Story: Function) => (
      <ApolloProvider client={client}>
        <Story />
      </ApolloProvider>
    ),
  ],
};
