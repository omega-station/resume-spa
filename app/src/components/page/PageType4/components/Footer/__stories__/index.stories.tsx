import { storiesOf } from '@storybook/react';
import React from 'react';
import Footer from '..';
import { withProvider } from '../../../../../../utility/apollo';

storiesOf('page/Page/PageType4/Footer', module)
  .addDecorator(withProvider)
  .add('default', () => <Footer />);
