import { number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Typed from '..';
import defaults from '../defaults';

storiesOf('page/Page/PageType1/Typed', module)
  .addDecorator(withKnobs)
  .add('default', () => <Typed strings={defaults.strings} />)
  .add('withKnobs', () => {
    const cursorChar: string = text('Cursor', defaults.cursorChar as string);
    const strings: string = text('Text', defaults.strings.join('') as string);
    const typeSpeed: number = number('Speed (ms)', defaults.typeSpeed as number);
    return <Typed cursorChar={cursorChar} strings={[strings]} typeSpeed={typeSpeed} />;
  });
