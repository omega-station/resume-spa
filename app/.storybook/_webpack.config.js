module.exports = ({ config }) => {
  // config.mode = 'production';
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  // config.performance = { hints: false };
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
