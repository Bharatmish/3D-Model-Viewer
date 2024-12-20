import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the correct import for React 18
import './styles/App.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
