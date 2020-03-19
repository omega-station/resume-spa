import { storiesOf } from '@storybook/react';
import React from 'react';
import StoryRouter from 'storybook-react-router';
import PageType3 from '..';
import { withProvider } from '../../../../utility/apollo';

storiesOf('page/Page/PageType3', module)
  .addDecorator(StoryRouter())
  .addDecorator(withProvider)
  .add('default', () => <PageType3 />);
