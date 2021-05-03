import React from 'react';
import Contact from '..';
import { ApolloProvider, client } from '../../../../utility/apollo';
import defaults from '../defaults';

export const WithArgs = (args: any) => <Contact {...args} />;
WithArgs.storyName = 'with Controls';

export default {
  component: Contact,
  title: 'core/Contact',
  args: { ...defaults },
  decorators: [
    (Story: Function) => (
      <ApolloProvider client={client}>
        <Story />
      </ApolloProvider>
    ),
  ],
};
