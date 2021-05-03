import { setConsoleOptions, withConsole } from '@storybook/addon-console';
import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
import { addDecorator, addParameters } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import '../src/css/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })),
  },
};

setConsoleOptions({
  panelExclude: [],
});

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(StoryRouter());

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    sortStoriesByKind: true,
  },
});
