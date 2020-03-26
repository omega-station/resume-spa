import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import _ from 'lodash';
import React from 'react';
import Section from '..';
import { getHeadings } from '../../../../utility';
import { withProvider } from '../../../../utility/apollo';
import { section as _section } from '../../../../utility/constant';
import { data } from '../../../../utility/graphql/data';

storiesOf('core/Section', module)
  .addDecorator(withKnobs)
  .addDecorator(withProvider)
  .add('default', () => <Section pagetype={0} section={_section[0]} />)
  .add('withKnobs', () => {
    const section: string = select('Section Name', _.invert(getHeadings(data)), _section[0]);
    return <Section pagetype={0} section={section} />;
  });
