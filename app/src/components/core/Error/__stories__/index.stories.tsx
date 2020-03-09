import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Error from '..';
import defaults from '../defaults';

storiesOf('core/Error', module)
  .addDecorator(withKnobs)
  .add('default', () => <Error />)
  .add('withKnobs', () => {
    const message: string = text('Message', defaults.message as string);
    const icon: string = text('Icon', defaults.icon as string);
    return <Error message={message} icon={icon} />;
  });
