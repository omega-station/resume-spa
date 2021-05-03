import React from 'react';
import Loading from '..';
import defaults from '../defaults';

export const WithArgs = (args: any) => <Loading {...args} />;
WithArgs.storyName = 'with Controls';

export default {
  component: Loading,
  title: 'core/Loading',
  args: { ...defaults },
};
