import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './components/demo';

document.addEventListener('DOMContentLoaded', () => {

    const data = [
        {
            real_name: 'Clark Kent',
            thumbnail: 'http://placekitten.com/50x50',
            superhero_name: 'Superman',
            tier: 'powerhouse',
            publisher: 'dc'
        },
        {
            real_name: 'Clark Kent',
            thumbnail: 'http://placekitten.com/50x50',
            superhero_name: 'Superman',
            tier: 'powerhouse',
            publisher: 'dc'
        },
        {
            real_name: 'Clark Kent',
            thumbnail: 'http://placekitten.com/50x50',
            superhero_name: 'Superman',
            tier: 'powerhouse',
            publisher: 'dc'
        },
        {
            real_name: 'Clark Kent',
            thumbnail: 'http://placekitten.com/50x50',
            superhero_name: 'Superman',
            tier: 'powerhouse',
            publisher: 'dc'
        }

    ];
    ReactDOM.render(
        <Demo
            data={data}
        />,
        document.getElementById('root')
    );
});
