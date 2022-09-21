import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

//-------------------- Вывод для первого задания---
// const element = <h1>Привет, МИР!</h1>;
// root.render(element);
//-------------------------------------------------

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

