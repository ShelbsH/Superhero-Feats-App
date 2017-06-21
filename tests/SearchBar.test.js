import React from 'react';
import {shallow} from 'enzyme';
import SearchBar from '../components/SearchBar';

describe('The Search Bar Component will display data from Superheroes', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<searchBar />)
  });

  it('should have a component that exists', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should be able to perform an auto-complete when the user types', () => {
    //A picture and the name of the superhero should be displayed.
  }); 
});