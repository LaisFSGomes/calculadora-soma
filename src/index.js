import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const icon = process.env.REACT_APP_ICON;
const title = process.env.REACT_APP_TITLE;
const footer_desc = process.env.REACT_APP_FOOTER;

root.render(
  <React.StrictMode>
    <App 
      icon = {icon}
      title = {title} 
      footer = {footer_desc} 
    />
  </React.StrictMode>
);


