import React from 'react';
import Section from '..';
import { getHeadings } from '../../../../utility';
import { ApolloProvider, client } from 'utility/apollo';
import { data } from 'utility/graphql/data';

export const WithArgs = (args: any) => <Section {...args} />;
WithArgs.storyName = 'with Controls';

export default {
  component: Section,
  title: 'core/Section',
  argTypes: {
    section: {
      control: {
        type: 'select',
        options: Object.keys(getHeadings(data)),
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
