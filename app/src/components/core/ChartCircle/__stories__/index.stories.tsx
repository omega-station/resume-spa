import { number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import ChartCircle from '..';
import defaults from '../defaults';

storiesOf('core/ChartCircle', module)
  .addDecorator(withKnobs)
  .add('default', () => <ChartCircle index={0} label={defaults.label} percent={defaults.percent} />)
  .add('withKnobs', () => {
    const label: string = text('Label', defaults.label as string);
    const percent: number = number('Percent', defaults.percent as number);
    return <ChartCircle index={0} label={label} percent={percent} />;
  });
