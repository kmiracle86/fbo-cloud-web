import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/lib/calendar/style/css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
