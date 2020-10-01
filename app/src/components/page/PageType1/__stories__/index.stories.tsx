import { storiesOf } from '@storybook/react';
import React from 'react';
// import StoryRouter from 'storybook-react-router';
import PageType1 from '..';
import { withProvider } from '../../../../utility/apollo';

storiesOf('page/Page/PageType1', module)
  // .addDecorator(StoryRouter())
  .addDecorator(withProvider)
  .add('default', () => <PageType1 />);
