import '@storybook/addon-console';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';
import { withInfo } from '@storybook/addon-info';
import { addDecorator, addParameters } from '@storybook/react';
import '../src/css/index.css';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

setConsoleOptions({
  panelExclude: [],
});

addDecorator(
  withInfo({
    inline: false,
    header: false,
    source: false,
  })
);

addParameters({
  options: {
    sortStoriesByKind: true,
  },
});
