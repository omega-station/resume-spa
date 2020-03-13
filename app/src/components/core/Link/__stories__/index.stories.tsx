import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Link from '..';
import defaults from '../defaults';

storiesOf('core/Link', module)
  .addDecorator(withKnobs)
  .add('withKnobs', () => {
    const children: string = text('Children (text)', defaults.children as string);
    const url: string = text('URL', defaults.url as string);
    const target: string = text('Target', defaults.target as string);
    const title: string = text('Title', defaults.title as string);
    return (
      <Link url={url} target={target} title={title}>
        {children}
      </Link>
    );
  });
