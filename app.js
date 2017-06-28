import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './components/demo';

document.addEventListener('DOMContentLoaded', () => {
  const data = [
    {
      thumbnail: 'http://tse2.mm.bing.net/th?id=OIP.zQxxTe2BewqNhEF6_FEVmQEJEs&pid=15.1',
      real_name: 'Clark Kent',
      superhero_name: 'Superman',
      tier: 'powerhouse',
      publisher: 'DC'
    }, {
      thumbnail: 'http://tse2.mm.bing.net/th?id=OIP.zQxxTe2BewqNhEF6_FEVmQEJEs&pid=15.1',
      real_name: 'Bruce Wayne',
      superhero_name: 'Batman',
      tier: 'Street Leveler',
      publisher: 'DC'
    }, {
      thumbnail: 'http://tse2.mm.bing.net/th?id=OIP.zQxxTe2BewqNhEF6_FEVmQEJEs&pid=15.1',
      real_name: 'Peter Parker',
      superhero_name: 'Spider-Man',
      tier: 'Street Levevler',
      publisher: 'Marvel'
    }, {
      thumbnail: 'http://tse2.mm.bing.net/th?id=OIP.zQxxTe2BewqNhEF6_FEVmQEJEs&pid=15.1',
      real_name: 'Carol Danvers',
      superhero_name: 'Captain Marvel',
      tier: 'powerhouse',
      publisher: 'Marvel'
    }, {
      thumbnail: 'http://tse2.mm.bing.net/th?id=OIP.zQxxTe2BewqNhEF6_FEVmQEJEs&pid=15.1',
      real_name: 'John Stewart',
      superhero_name: 'Green Lantern',
      tier: 'Power House',
      publisher: 'DC'
    }, {
      thumbnail: 'http://tse2.mm.bing.net/th?id=OIP.zQxxTe2BewqNhEF6_FEVmQEJEs&pid=15.1',
      real_name: 'Matthew Murdock',
      superhero_name: 'Daredevil',
      tier: 'Street Levevler',
      publisher: 'Marvel'
    }
  ];

  ReactDOM.render(
    <Demo showData={data}/>, document.getElementById('root'));
});
