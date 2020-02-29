import '@storybook/addon-console';
import { withInfo } from '@storybook/addon-info';
import { addDecorator, addParameters, configure } from '@storybook/react';

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

const req = require.context('../src/components', true, /\.stories\.tsx$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
