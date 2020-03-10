import { storiesOf } from '@storybook/react';
import React from 'react';
import Header from '..';
import { data } from '../../../../../../utility/graphql/data';
import StoryRouter from 'storybook-react-router';

storiesOf('page/Page/PageType2/Header', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Header data={data} />);
