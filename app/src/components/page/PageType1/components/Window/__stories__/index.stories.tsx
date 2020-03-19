import { storiesOf } from '@storybook/react';
import React from 'react';
import Window from '..';
import defaults from '../defaults';

storiesOf('page/Page/PageType1/Window', module).add('default', () => <Window onClickClose={defaults.onClickClose}>Boo</Window>);
