import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Masthead from '..';
import { withProvider } from '../../../../utility/apollo';
import defaults from '../defaults';

storiesOf('core/Masthead', module)
  .addDecorator(withKnobs)
  .addDecorator(withProvider)
  .add('default', () => <Masthead />)
  .add('withKnobs', () => {
    const isAscii: boolean = boolean('Is Ascii?', defaults.isAscii as boolean);
    return <Masthead isAscii={isAscii} />;
  });
