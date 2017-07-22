import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './components/demo';

document.addEventListener('DOMContentLoaded', () => {
  const data = [
    {
      thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/5957182-superman_avatar.jpg',
      real_name: 'Clark Kent',
      superhero_name: 'Superman',
      tier: 'Power House',
      publisher: 'DC',
      id: '1'
    }, {
      thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/5957179-batman_avatar.jpg',
      real_name: 'Bruce Wayne',
      superhero_name: 'Batman',
      tier: 'Street Leveler',
      publisher: 'DC',
      id: '2'
    }, {
      thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/5957181-spider-man_avatar.jpg',
      real_name: 'Peter Parker',
      superhero_name: 'Spider-Man',
      tier: 'Street Levevler',
      publisher: 'Marvel',
      id: '3'
    }, {
      thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/5957189-carol_danvers_avatar.jpg',
      real_name: 'Carol Danvers',
      superhero_name: 'Captain Marvel',
      tier: 'Power House',
      publisher: 'Marvel',
      id: '4'
    }, {
      thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/5957180-lantern_avatar.jpg',
      real_name: 'John Stewart',
      superhero_name: 'Green Lantern',
      tier: 'Power House',
      publisher: 'DC',
      id: '5'
    }, {
      thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/5957193-daredevil_avatar.jpg',
      real_name: 'Matthew Murdock',
      superhero_name: 'Daredevil',
      tier: 'Street Levevler',
      publisher: 'Marvel',
      id: '6'
    }
    
  ];

  ReactDOM.render(
    <Demo showData={data}/>, document.getElementById('root'));
});
