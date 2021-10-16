import { storiesOf } from '@storybook/react';
import React from 'react';
// import StoryRouter from 'storybook-react-router';
import MenuPage from '..';
import { withProvider } from 'utility/apollo';

storiesOf('core/MenuPage', module)
  // .addDecorator(StoryRouter())
  .addDecorator(withProvider)
  .add('default', () => <MenuPage />);
