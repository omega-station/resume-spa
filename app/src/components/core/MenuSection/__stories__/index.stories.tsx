import { storiesOf } from '@storybook/react';
import React from 'react';
import MenuSection from '..';
import { withProvider } from '../../../../utility/apollo';

storiesOf('core/MenuSection', module)
  .addDecorator(withProvider)
  .add('default', () => <MenuSection />);
