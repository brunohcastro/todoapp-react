import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'pretty-checkbox/dist/pretty-checkbox.min.css';

import Axios from 'axios';

if (process.env.REACT_APP_BASE_URL) {
  Axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}/api`;
} else {
  Axios.defaults.baseURL = 'http://localhost:8080/api';
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
