import React from 'react';
import GitHub from '..';
import defaults from '../defaults';

export const WithArgs = (args: any) => <GitHub {...args} />;
WithArgs.storyName = 'with Controls';

export default {
  component: GitHub,
  title: 'core/GitHub',
  args: { ...defaults },
  argTypes: {
    mode: {
      control: {
        type: 'inline-radio',
        options: ['alternate', 'circle', 'square', 'triangle'],
      },
    },
    color: { control: 'color' },
    fill: { control: 'color' },
  },
};
