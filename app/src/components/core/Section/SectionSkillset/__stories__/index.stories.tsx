import { storiesOf } from '@storybook/react';
import React from 'react';
import SectionSkillset from '..';
import { data } from '../../../../../utility/graphql/data';

storiesOf('core/Section/SectionSkillset', module).add('default', () => <SectionSkillset data={data} />);
