import { storiesOf } from '@storybook/react';
import React from 'react';
// import StoryRouter from 'storybook-react-router';
import Header from '..';
import { withProvider } from '../../../../../../utility/apollo';

storiesOf('page/Page/PageType4/Header', module)
  // .addDecorator(StoryRouter())
  .addDecorator(withProvider)
  .add('default', () => <Header />);
