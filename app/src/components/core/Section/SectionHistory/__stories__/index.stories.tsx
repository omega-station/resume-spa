import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import _ from 'lodash';
import React from 'react';
import SectionHistory from '..';
import { getHeadings, Headings } from '../../../../../utility';
import { section } from '../../../../../utility/constant';
import { data } from '../../../../../utility/graphql/data';

const headings: Headings = _.invert(getHeadings(data, [2, 3]));

storiesOf('core/Section/SectionHistory', module)
  .addDecorator(withKnobs)
  .add('default', () => <SectionHistory data={data} type={section[2]} />)
  .add('withKnobs', () => {
    const type: string = select('Name', headings, section[2]);
    return <SectionHistory data={data} type={type} />;
  });
