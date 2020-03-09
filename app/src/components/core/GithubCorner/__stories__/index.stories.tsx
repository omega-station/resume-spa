import { boolean, color, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import GitHubCorner from '..';
import defaults from '../defaults';

storiesOf('core/GitHubCorner', module)
  .addDecorator(withKnobs)
  .add('default', () => <GitHubCorner />)
  .add('withKnobs', () => {
    const isLeft: boolean = boolean('Is Left?', defaults.isLeft as boolean);
    const _color: string = color('Color', defaults.color as string);
    const fill: string = color('Fill', defaults.fill as string);
    const url: string = text('Link', defaults.url as string);
    const ariaLabel: string = text('Aria Label', defaults.ariaLabel as string);
    return <GitHubCorner isLeft={isLeft} aria-label={ariaLabel} color={_color} fill={fill} url={url} />;
  });
