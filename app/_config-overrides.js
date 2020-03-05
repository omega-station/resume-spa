const uglifyjs = require('react-app-rewire-uglifyjs');

module.exports = function override(config, env) {
  config = uglifyjs(config);
  return config;
};
