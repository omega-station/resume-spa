import React from 'react';
import ChartCircle from '..';
import defaults from '../defaults';

export const WithArgs = (args: any) => <ChartCircle {...args} />;
WithArgs.storyName = 'with Controls';

export default {
  component: ChartCircle,
  title: 'core/ChartCircle',
  args: { ...defaults },
};
