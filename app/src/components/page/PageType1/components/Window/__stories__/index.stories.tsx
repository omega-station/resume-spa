import React from 'react';
import Window from '..';
import defaults from '../defaults';

export const WithArgs = (args: any) => <Window {...args}>Foo</Window>;
WithArgs.storyName = 'with Controls';

export default {
  component: Window,
  title: 'page/Page/PageType1/Window',
  args: { heading: defaults.heading },
};
