import { storiesOf } from '@storybook/react';
import React from 'react';
import StoryRouter from 'storybook-react-router';
import PageType2 from '..';
import { data } from '../../../../utility/graphql/data';

storiesOf('page/Page/PageType2', module)
  .addDecorator(StoryRouter())
  .add('default', () => <PageType2 data={data} />);
