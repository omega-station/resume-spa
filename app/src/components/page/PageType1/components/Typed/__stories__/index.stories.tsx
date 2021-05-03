import React from 'react';
import Typed from '..';
import defaults from '../defaults';

export const WithArgs = (args: any) => <Typed {...args} />;
WithArgs.storyName = 'with Controls';

export default {
  component: Typed,
  title: 'page/Page/PageType1/Typed',
  args: { ...defaults },
};
