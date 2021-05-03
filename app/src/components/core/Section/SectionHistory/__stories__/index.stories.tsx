import React from 'react';
import SectionHistory from '..';
import { getHeadings } from '../../../../../utility';
import { ApolloProvider, client } from '../../../../../utility/apollo';
import { data } from '../../../../../utility/graphql/data';

export const WithArgs = (args: any) => <SectionHistory {...args} />;
WithArgs.storyName = 'with Controls';

export default {
  component: SectionHistory,
  title: 'core/Section/SectionHistory',
  argTypes: {
    section: {
      control: {
        type: 'select',
        options: Object.keys(getHeadings(data, [2, 3])),
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
