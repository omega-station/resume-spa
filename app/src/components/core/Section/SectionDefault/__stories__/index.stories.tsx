import React from 'react';
import SectionDefault from '..';
import { getHeadings } from '../../../../../utility';
import { ApolloProvider, client } from '../../../../../utility/apollo';
import { data } from '../../../../../utility/graphql/data';

export const WithArgs = (args: any) => <SectionDefault {...args} />;
WithArgs.storyName = 'with Controls';

export default {
  component: SectionDefault,
  title: 'core/Section/SectionDefault',
  argTypes: {
    section: {
      control: {
        type: 'select',
        options: Object.keys(getHeadings(data, [0, 4, 5, 6])),
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
