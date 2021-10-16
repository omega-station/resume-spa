import React from 'react';
import SectionSkillset from '..';
import { ApolloProvider, client } from 'utility/apollo';

export const Default = () => <SectionSkillset />;
Default.storyName = 'default';

export default {
  component: SectionSkillset,
  title: 'core/Section/SectionSkillset',
  decorators: [
    (Story: Function) => (
      <ApolloProvider client={client}>
        <Story />
      </ApolloProvider>
    ),
  ],
};
