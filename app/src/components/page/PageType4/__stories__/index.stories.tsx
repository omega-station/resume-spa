import { storiesOf } from '@storybook/react';
import React from 'react';
import StoryRouter from 'storybook-react-router';
import PageType4 from '..';
import { data } from '../../../../utility/graphql/data';

storiesOf('page/Page/PageType4', module)
  .addDecorator(StoryRouter())
  .add('default', () => <PageType4 data={data} />);
