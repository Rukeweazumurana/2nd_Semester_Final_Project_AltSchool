import React from 'react';
import { createRoot } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './Components/ErrorBoundary';

import App from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
