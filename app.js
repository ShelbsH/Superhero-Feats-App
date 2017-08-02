import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './components/demo';

document.addEventListener('DOMContentLoaded', () => {

  // http://localhost:8000/api/heroes
  // GET /api/heroes
  const data = [

  ];

  ReactDOM.render(
    <Demo showData={data}/>, document.getElementById('root'));
});
