import React from 'react';
import Masthead from '..';
import { ApolloProvider, client } from 'utility/apollo';
import defaults from '../defaults';

export const WithArgs = (args: any) => <Masthead {...args} />;
WithArgs.storyName = 'with Controls';

export default {
  component: Masthead,
  title: 'core/Masthead',
  args: { ...defaults },
  decorators: [
    (Story: Function) => (
      <ApolloProvider client={client}>
        <Story />
      </ApolloProvider>
    ),
  ],
};
