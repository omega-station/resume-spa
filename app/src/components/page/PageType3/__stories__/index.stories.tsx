import { storiesOf } from '@storybook/react';
import React from 'react';
import StoryRouter from 'storybook-react-router';
import PageType3 from '..';
import { data } from '../../../../utility/graphql/data';

storiesOf('page/Page/PageType3', module)
  .addDecorator(StoryRouter())
  .add('default', () => <PageType3 data={data} />);
