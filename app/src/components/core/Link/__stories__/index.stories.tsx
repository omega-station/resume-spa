import React from 'react';
import Link from '..';
import defaults from '../defaults';

export const WithArgs = (args: any) => <Link {...args} />;
WithArgs.storyName = 'with Controls';

export default {
  component: Link,
  title: 'core/Link',
  args: { ...defaults },
};
