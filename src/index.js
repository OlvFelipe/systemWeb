import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from '../src/components/Header';

import Routes from '../src/routes';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);

