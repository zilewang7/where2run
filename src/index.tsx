import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { Router } from './router';
import 'antd/dist/antd.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import "./i18n/configs"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);