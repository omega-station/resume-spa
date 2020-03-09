import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Loading from '..';
import defaults from '../defaults';

storiesOf('core/Loading', module)
  .addDecorator(withKnobs)
  .add('default', () => <Loading />)
  .add('withKnobs', () => {
    const message: string = text('Message', defaults.message as string);
    return <Loading message={message} />;
  });
