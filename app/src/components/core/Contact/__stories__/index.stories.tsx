import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Contact from '..';
import { withProvider } from '../../../../utility/apollo';
import defaults from '../defaults';

storiesOf('core/Contact', module)
  .addDecorator(withKnobs)
  .addDecorator(withProvider)
  .add('default', () => <Contact />)
  .add('withKnobs', () => {
    const hasDescription: boolean = boolean('Has Description?', defaults.hasDescription as boolean);
    const hasTitle: boolean = boolean('Has Title?', defaults.hasTitle as boolean);
    const isPostalWithCity: boolean = boolean('Is Postal Code with City?', defaults.isPostalWithCity as boolean);
    return <Contact hasDescription={hasDescription} hasTitle={hasTitle} isPostalWithCity={isPostalWithCity} />;
  });
