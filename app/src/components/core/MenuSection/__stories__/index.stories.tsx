import { storiesOf } from '@storybook/react';
import React from 'react';
import MenuSection from '..';
import { data } from '../../../../utility/graphql/data';

storiesOf('core/MenuSection', module).add('default', () => <MenuSection data={data} />);
