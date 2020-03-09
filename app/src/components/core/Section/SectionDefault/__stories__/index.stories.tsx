import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import _ from 'lodash';
import React from 'react';
import SectionDefault from '..';
import { getHeadings, Headings } from '../../../../../utility';
import { section } from '../../../../../utility/constant';
import { data } from '../../../../../utility/graphql/data';

const headings: Headings = _.invert(getHeadings(data, [0, 4, 5, 6]));

storiesOf('core/Section/SectionDefault', module)
  .addDecorator(withKnobs)
  .add('default', () => <SectionDefault data={data} type={section[0]} />)
  .add('withKnobs', () => {
    const type: string = select('Name', headings, section[0]);
    return <SectionDefault data={data} type={type} />;
  });
