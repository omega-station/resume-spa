import React from 'react';
import Header from '..';
import { ApolloProvider, client } from '../../../../../../utility/apollo';

export const WithArgs = (args: any) => <Header {...args} />;
WithArgs.storyName = 'with Controls';

export default {
  component: Header,
  title: 'page/Page/PageType3/Header',
  argTypes: {
    section: {
      defaultValue: 0,
      control: {
        type: 'inline-radio',
        options: Array(7)
          .fill(0)
          .map((v, i) => i),
      },
    },
  },
  decorators: [
    (Story: Function) => (
      <ApolloProvider client={client}>
        <Story />
      </ApolloProvider>
    ),
  ],
};
