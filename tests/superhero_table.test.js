import React from 'react';
import {shallow} from 'enzyme';
import HeroTable from '../components/Hero_Table';
import HeroPage from '../components/Hero_Page';

describe('Superhero Table', () => {
  let wrapper;
  let superhero_data;
  let firstRowNode;

  superhero_data = [
    {
      thumbnail: 'http://tse2.mm.bing.net/th?id=OIP.zQxxTe2BewqNhEF6_FEVmQEJEs&pid=15.1',
      real_name: 'Clark Kent',
      superhero_name: 'Superman',
      tier: 'Power House',
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
    }
  ];

  wrapper = shallow(<HeroTable data={superhero_data}/>);

  // Get the first node to retrieve the collections of "td" elements to match the
  // length the "superhero_data" array for testing.
  firstRowNode = wrapper
    .find('tbody')
    .find('tr')
    .first()
    .children();

  it('should be able to match the equal amount of properties from the superhero_data', () => {
    expect(firstRowNode).toHaveLength(4);
  });

  it('needs to successfully render the thumbnail image', () => {

    //Get the image within the <td> element and assert for the "src" attribute.
    const getImg = firstRowNode
      .find('img')
      .prop('src');

    expect(getImg).toBe(superhero_data[0].thumbnail);
  });

  it('needs to successfully render the real name', () => {
    expect(firstRowNode.at(0).text()).toBe(superhero_data[0].real_name);
  });

  it('needs to successfully render the superhero name', () => {

    expect(firstRowNode.at(1).text()).toBe(superhero_data[0].superhero_name);
  });

  it('needs to successfully render the tier level', () => {
    expect(firstRowNode.at(2).text()).toBe(superhero_data[0].tier);
  });

  it('needs to successfully render the publisher', () => {
    expect(firstRowNode.at(3).text()).toBe(superhero_data[0].publisher);
  });

  describe('HeroPage Component', () => {

    it('should be able to load up the HeroPage component when a row is clicked', () => {
      const mockTargetIndex = 2;
      const mockState = [superhero_data[mockTargetIndex]];
      const tableWrapper = shallow(<HeroTable data={superhero_data} heroPageData={mockState}/>);
      const heroPageWrapper = shallow(<HeroPage heroPageData={mockState} />);

      const tr = tableWrapper
        .find('tbody')
        .find('tr')
        .at(0);
      

      tr.simulate('click', {
        currentTarget: {
          dataset: {
            index: mockTargetIndex
          }
        }
      });

      expect(heroPageWrapper.exists()).toBe(true);
      expect(heroPageWrapper.find('li').at(1).text()).toEqual('Peter Parker');
    });
  })
});
