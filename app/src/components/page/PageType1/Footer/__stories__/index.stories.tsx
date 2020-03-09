import { storiesOf } from '@storybook/react';
import React from 'react';
import Footer from '..';
import { data } from '../../../../../utility/graphql/data';

storiesOf('page/Page/PageType1/Footer', module).add('default', () => <Footer data={data} />);
