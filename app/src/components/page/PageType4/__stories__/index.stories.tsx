import { storiesOf } from '@storybook/react';
import React from 'react';
import StoryRouter from 'storybook-react-router';
import PageType4 from '..';

storiesOf('page/Page/PageType4', module)
  .addDecorator(StoryRouter())
  .add('default', () => <PageType4 />);
