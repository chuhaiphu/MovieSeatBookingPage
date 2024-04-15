import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import mainStore from './stores'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={mainStore}>
    <App />
  </Provider>
);
