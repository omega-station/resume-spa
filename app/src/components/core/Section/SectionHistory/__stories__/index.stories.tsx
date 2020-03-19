import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import _ from 'lodash';
import React from 'react';
import SectionHistory from '..';
import { getHeadings } from '../../../../../utility';
import { withProvider } from '../../../../../utility/apollo';
import { section } from '../../../../../utility/constant';
import { data } from '../../../../../utility/graphql/data';

storiesOf('core/Section/SectionHistory', module)
  .addDecorator(withKnobs)
  .addDecorator(withProvider)
  .add('default', () => <SectionHistory type={section[2]} />)
  .add('withKnobs', () => {
    const type: string = select('Name', _.invert(getHeadings(data, [2, 3])), section[2]);
    return <SectionHistory type={type} />;
  });
