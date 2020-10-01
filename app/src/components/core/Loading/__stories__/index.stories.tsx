import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Loading from '..';

storiesOf('core/Loading', module)
  .addDecorator(withKnobs)
  .add('default', () => <Loading />);
