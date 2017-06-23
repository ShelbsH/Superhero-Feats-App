import React from 'react';
import {shallow} from 'enzyme';
import SearchBar from '../components/SearchBar';

describe('The Search Bar Component will display data from Superheroes', () => {
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
    },
    {
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


  const wrapper = shallow(
      <SearchBar
        data={data} />);

  it('should have a component that exists', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should be able to perform an auto-complete when the user types', () => {
    const input = wrapper.find('input');
    input.simulate('keyup', {
        target: {
            value: 'clark'
        }
    });
    expect(wrapper.state().keyValues).toBe('clark');
    expect(wrapper.find('li').length).toBe(1);
    expect(wrapper.find('li').text()).toBe('Clark Kent');

  });
});
