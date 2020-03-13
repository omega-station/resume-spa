import '@storybook/addon-console';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';
import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
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
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    sortStoriesByKind: true,
  },
});
