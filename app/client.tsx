// Entry point for the browser
// Start your React application and add the required containers
// Here we have <BrowserRouter /> for react-router

import { rehydrateMarks } from 'react-imported-component';
import * as React from 'react';
import { hydrate, render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import importedComponents from './imported'; // eslint-disable-line
import config from 'react-reveal/globals';

import App from './App';

config({ ssrFadeout: true });

const element = document.getElementById('app');

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// In production, we want to hydrate instead of render
// because of the server-rendering
if (process.env.NODE_ENV === 'production') {
  // rehydrate the bundle marks
  rehydrateMarks().then(() => {
    if (element.hasChildNodes()) {
      hydrate(app, element);
    }
  });
} else {
  render(app, element);
}

// Hot reload is that easy with Parcel
if (module.hot) {
  module.hot.accept();
}
