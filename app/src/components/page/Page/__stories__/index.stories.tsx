import { optionsKnob as options, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import StoryRouter from 'storybook-react-router';
import Page from '..';
import { withProvider } from '../../../../utility/apollo';
import defaults from '../defaults';

storiesOf('page/Page', module)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .addDecorator(withProvider)
  .add('default', () => <Page type={defaults.type} />)
  .add('withKnobs', () => {
    const type: string = options(
      'Type',
      {
        One: '1',
        Two: '2',
        Three: '3',
        Four: '4',
      },
      (defaults.type as number).toString(),
      { display: 'inline-radio' }
    );
    return <Page type={parseInt(type)} />;
  });
