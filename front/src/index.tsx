import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { App } from './core/router';
import { Provider } from 'react-redux';
import store from './core/store';
import '@fontsource/poppins';
import 'react-vertical-timeline-component/style.min.css';
import "./client/constants/turn"
import './core/translations/i18n'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback="...loading">
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
