import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Add BrowserRouter with basename */}
    <BrowserRouter basename="/PNSBA">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Optional: Measure app performance
reportWebVitals();
