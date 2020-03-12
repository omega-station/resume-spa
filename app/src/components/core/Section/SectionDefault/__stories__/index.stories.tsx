import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import _ from 'lodash';
import React from 'react';
import SectionDefault from '..';
import { getHeadings } from '../../../../../utility';
import { section } from '../../../../../utility/constant';
import { data } from '../../../../../utility/graphql/data';

storiesOf('core/Section/SectionDefault', module)
  .addDecorator(withKnobs)
  .add('default', () => <SectionDefault type={section[0]} />)
  .add('withKnobs', () => {
    const type: string = select('Name', _.invert(getHeadings(data, [0, 4, 5, 6])), section[0]);
    return <SectionDefault type={type} />;
  });
