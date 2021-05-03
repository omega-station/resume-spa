import React from 'react';
import Page from '..';
import { ApolloProvider, client } from '../../../../utility/apollo';

export const WithArgs = (args: any) => <Page {...args} />;
WithArgs.storyName = 'with Controls';

export default {
  component: Page,
  title: 'page/Page',
  // args: { ...defaults },
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: ['1', '2', '3', '4'],
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
