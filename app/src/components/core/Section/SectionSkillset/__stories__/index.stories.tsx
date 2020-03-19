import { storiesOf } from '@storybook/react';
import React from 'react';
import SectionSkillset from '..';
import { withProvider } from '../../../../../utility/apollo';

storiesOf('core/Section/SectionSkillset', module)
  .addDecorator(withProvider)
  .add('default', () => <SectionSkillset />);
