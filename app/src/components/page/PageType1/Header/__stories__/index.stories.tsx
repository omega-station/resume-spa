import { storiesOf } from '@storybook/react';
import React from 'react';
import Header from '..';
import { data } from '../../../../../utility/graphql/data';

storiesOf('page/Page/PageType1/Header', module).add('default', () => <Header data={data} />);
