import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {HomePage} from './pages/homePage/homePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
