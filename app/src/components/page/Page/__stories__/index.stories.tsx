import { optionsKnob as options, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import StoryRouter from 'storybook-react-router';
import Page from '..';
import { data } from '../../../../utility/graphql/data';
import defaults from '../defaults';

storiesOf('page/Page', module)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('default', () => <Page data={data} />)
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
    return <Page data={data} type={parseInt(type)} />;
  });
