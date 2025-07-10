import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './i18n';
import './index.css';

// Function to get browser language
const getBrowserLanguage = () => {
  const browserLang = navigator.language.toLowerCase().split('-')[0];
  return ['ar', 'en'].includes(browserLang) ? browserLang : 'en';
};

// Redirect to the correct language path if needed
const path = window.location.pathname;
if (path === '/') {
  const defaultLang = getBrowserLanguage();
  window.location.replace(`/${defaultLang}`);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
