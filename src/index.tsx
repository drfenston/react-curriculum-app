import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Dans index.js ou App.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './custom.scss'

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);  // Utilise createRoot ici
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
