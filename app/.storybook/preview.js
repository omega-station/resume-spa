import '@storybook/addon-console';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';
import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
import { withInfo } from '@storybook/addon-info';
import { addDecorator, addParameters } from '@storybook/react';
import '../src/css/index.css';

addDecorator(
  withInfo({
    inline: true,
    header: true,
    source: true,
  })
);

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

setConsoleOptions({
  panelExclude: [],
});

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    sortStoriesByKind: true,
  },
});
