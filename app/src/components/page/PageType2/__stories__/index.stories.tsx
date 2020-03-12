import { storiesOf } from '@storybook/react';
import React from 'react';
import StoryRouter from 'storybook-react-router';
import PageType2 from '..';

storiesOf('page/Page/PageType2', module)
  .addDecorator(StoryRouter())
  .add('default', () => <PageType2 />);
