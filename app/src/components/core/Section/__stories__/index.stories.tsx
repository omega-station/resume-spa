import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import _ from 'lodash';
import React from 'react';
import Section from '..';
import { getHeadings } from '../../../../utility';
import { withProvider } from '../../../../utility/apollo';
import { section } from '../../../../utility/constant';
import { data } from '../../../../utility/graphql/data';

storiesOf('core/Section', module)
  .addDecorator(withKnobs)
  .addDecorator(withProvider)
  .add('default', () => <Section />)
  .add('withKnobs', () => {
    const type: string = select('Name', _.invert(getHeadings(data)), section[0]);
    return <Section type={type} />;
  });
