import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppLeer from './AppLeer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Der StrictMode ist beim entwickeln standardmäßig bei NPM, YARN, BUN aktiviert, d.h.
  // Merke: Der StrictMode triggert den React Render Lifecycle ZWEIMAL!
  <React.StrictMode>
    <AppLeer/>
  </React.StrictMode>
);
