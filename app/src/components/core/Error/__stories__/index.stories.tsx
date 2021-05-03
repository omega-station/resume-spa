import React from 'react';
import Error from '..';
import defaults from '../defaults';

export const WithArgs = (args: any) => <Error {...args} />;
WithArgs.storyName = 'with Controls';

export default {
  component: Error,
  title: 'core/Error',
  args: { ...defaults },
};
