module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-knobs', '@storybook/addon-links', '@storybook/preset-create-react-app'],
  typescript: {
    reactDocgen: 'react-docgen',
  },
};
