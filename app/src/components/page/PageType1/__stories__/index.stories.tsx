import { storiesOf } from '@storybook/react';
import React from 'react';
import StoryRouter from 'storybook-react-router';
import PageType1 from '..';
import { data } from '../../../../utility/graphql/data';

storiesOf('page/Page/PageType1', module)
  .addDecorator(StoryRouter())
  .add('default', () => <PageType1 data={data} />);
