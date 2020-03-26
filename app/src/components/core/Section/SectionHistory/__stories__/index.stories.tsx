import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import _ from 'lodash';
import React from 'react';
import SectionHistory from '..';
import { getHeadings } from '../../../../../utility';
import { withProvider } from '../../../../../utility/apollo';
import { section as _section } from '../../../../../utility/constant';
import { data } from '../../../../../utility/graphql/data';

storiesOf('core/Section/SectionHistory', module)
  .addDecorator(withKnobs)
  .addDecorator(withProvider)
  .add('default', () => <SectionHistory pagetype={0} section={_section[0]} />)
  .add('withKnobs', () => {
    const section: string = select('Section Name', _.invert(getHeadings(data, [2, 3])), _section[0]);
    return <SectionHistory pagetype={0} section={section} />;
  });
