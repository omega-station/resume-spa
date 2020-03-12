import { storiesOf } from '@storybook/react';
import React from 'react';
import StoryRouter from 'storybook-react-router';
import PageType1 from '..';

storiesOf('page/Page/PageType1', module)
  .addDecorator(StoryRouter())
  .add('default', () => <PageType1 />);
