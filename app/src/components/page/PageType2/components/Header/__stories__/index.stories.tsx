import { storiesOf } from '@storybook/react';
import React from 'react';
import StoryRouter from 'storybook-react-router';
import Header from '..';

storiesOf('page/Page/PageType2/Header', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Header />);
