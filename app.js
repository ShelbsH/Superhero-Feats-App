import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './components/demo';

document.addEventListener('DOMContentLoaded', () => {
  const data = [
    {
      real_name: 'Clark Kent',
      thumbnail: 'http://tse2.mm.bing.net/th?id=OIP.zQxxTe2BewqNhEF6_FEVmQEJEs&pid=15.1',
      superhero_name: 'Superman',
      tier: 'powerhouse',
      publisher: 'dc'
    },
    {
      real_name: 'Clark Kent',
      thumbnail: 'http://tse2.mm.bing.net/th?id=OIP.zQxxTe2BewqNhEF6_FEVmQEJEs&pid=15.1',
      superhero_name: 'Superman',
      tier: 'powerhouse',
      publisher: 'dc'
    },
    {
      real_name: 'Clark Kent',
      thumbnail: 'http://tse2.mm.bing.net/th?id=OIP.zQxxTe2BewqNhEF6_FEVmQEJEs&pid=15.1',
      superhero_name: 'Superman',
      tier: 'powerhouse',
      publisher: 'dc'
    },
    {
      real_name: 'Clark Kent',
      thumbnail: 'http://tse2.mm.bing.net/th?id=OIP.zQxxTe2BewqNhEF6_FEVmQEJEs&pid=15.1',
      superhero_name: 'Superman',
      tier: 'powerhouse',
      publisher: 'dc'
    }

  ];
  ReactDOM.render(
    <Demo
      showData={data}
    />,
    document.getElementById('root')
  );
});
