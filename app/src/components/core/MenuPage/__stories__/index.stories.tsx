import { storiesOf } from '@storybook/react';
import React from 'react';
import StoryRouter from 'storybook-react-router';
import MenuPage from '..';
import { data } from '../../../../utility/graphql/data';

storiesOf('core/MenuPage', module)
  .addDecorator(StoryRouter())
  .add('default', () => <MenuPage data={data} />);
