import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Masthead from '..';
import { data } from '../../../../utility/graphql/data';
import defaults from '../defaults';

storiesOf('core/Masthead', module)
  .addDecorator(withKnobs)
  .add('default', () => <Masthead data={data} />)
  .add('withKnobs', () => {
    const isAscii: boolean = boolean('Is Ascii?', defaults.isAscii as boolean);
    return <Masthead data={data} isAscii={isAscii} />;
  });
