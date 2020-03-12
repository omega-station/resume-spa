import { storiesOf } from '@storybook/react';
import React from 'react';
import StoryRouter from 'storybook-react-router';
import MenuPage from '..';

storiesOf('core/MenuPage', module)
  .addDecorator(StoryRouter())
  .add('default', () => <MenuPage />);
