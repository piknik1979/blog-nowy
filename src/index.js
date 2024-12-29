import React from 'react';
import ReactDOM from 'react-dom/client'; // Użyj nowego API
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Zamiast ReactDOM.render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
