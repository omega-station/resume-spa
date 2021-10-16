import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from 'components/core/App';
import * as serviceWorker from './serviceWorker';

const elRoot = document.getElementById('root');
ReactDOM.render(<App />, elRoot);

if (module.hot) {
  module.hot.accept('components/core/App', () => {
    const NextApp = require('components/core/App').default;
    ReactDOM.render(<NextApp />, elRoot);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
