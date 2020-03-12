import { storiesOf } from '@storybook/react';
import React from 'react';
import StoryRouter from 'storybook-react-router';
import PageType3 from '..';

storiesOf('page/Page/PageType3', module)
  .addDecorator(StoryRouter())
  .add('default', () => <PageType3 />);
