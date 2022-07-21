import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux/es/exports';
import 'bootstrap/dist/css/bootstrap.min.css';

import createStore from './store'

const store = createStore()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
  </React.StrictMode>
);