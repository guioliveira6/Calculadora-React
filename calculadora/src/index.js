import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Calculator from './main/Calculator'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <h1> Calculadora!</h1>
    <Calculator/>
  </div>,
  document.getElementById('root')
);


reportWebVitals();
