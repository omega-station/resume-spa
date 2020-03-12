import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Contact from '..';
import defaults from '../defaults';

storiesOf('core/Contact', module)
  .addDecorator(withKnobs)
  .add('default', () => <Contact />)
  .add('withKnobs', () => {
    const hasContainer: boolean = boolean('Has Container?', defaults.hasContainer as boolean);
    const hasTitle: boolean = boolean('Has Title?', defaults.hasTitle as boolean);
    return <Contact hasContainer={hasContainer} hasTitle={hasTitle} />;
  });
