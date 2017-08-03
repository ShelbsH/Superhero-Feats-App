import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './components/demo';

document.addEventListener('DOMContentLoaded', () => {
  const getJSON = url => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);

      xhr.onreadystatechange = () => {

        if (xhr.readyState < 3) {
          return;
        }

        if (xhr.status === 302) {
          return;
        }

        if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.responseText));
        }

        if (xhr.readyState === 4 && xhr.statusCode >= 400) {
          reject('The requested GET URL has failed');
        }
      };

      xhr.send();
    });
  };

  getJSON('./api/heroes').then((res) => {
    ReactDOM.render(<Demo showData={res} />, document.getElementById('root'));
  }).catch(err => console.log(err));
});