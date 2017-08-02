/* global
  describe
  it
  expect
*/

import React from 'react';
import {shallow, mount} from 'enzyme';
import HeroTable from '../components/Hero_Table';
import HeroPage from '../components/Hero_Page';

describe('Superhero Table', () => {
  let wrapper;
  let superhero_data;
  let firstRowNode;
  // let HeroBody;
  let supermanData;

  superhero_data = [
    {
      thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/5957182-superman_avatar.jpg',
      profile_picture: 'https://static.comicvine.com/uploads/original/13/136345/5978025-superman_profile.jpg',
      real_name: 'Clark Kent',
      superhero_name: 'Superman',
      tier: 'Power House',
      publisher: 'DC',
      id: '1'
    }, {
      thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/5957179-batman_avatar.jpg',
      profile_picture: 'https://static.comicvine.com/uploads/original/13/136345/5978026-batman_profile.jpg',
      real_name: 'Bruce Wayne',
      superhero_name: 'Batman',
      tier: 'Street Leveler',
      publisher: 'DC',
      id: '2'
    }, {
      thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/5957181-spider-man_avatar.jpg',
      profile_picture: 'https://static.comicvine.com/uploads/original/13/136345/5978024-spider-man_profile.jpg',
      real_name: 'Peter Parker',
      superhero_name: 'Spider-Man',
      tier: 'Street Levevler',
      publisher: 'Marvel',
      id: '3'
    }
  ];

  wrapper = mount(<HeroTable data={superhero_data}/>);
  supermanData = superhero_data[0];

  // Get the first node to retrieve the collections of "td" elements to match the
  // length the "superhero_data" array for testing.
  firstRowNode = wrapper
    .find('tbody')
    .find('td.heroTable-body-col');


  it('should be able to match the equal amount of properties from the superhero_data', () => {
    const getFirstRow = wrapper.find('tbody').find('td');
    expect(getFirstRow.debug());
    expect(getFirstRow.children()).toHaveLength(3);
  });

  it('needs to successfully render the thumbnail image', () => {

    //Get the image within the <td> element and assert for the "src" attribute.
    expect(firstRowNode.first().find('img').prop('src')).toBe(supermanData.thumbnail);
  });

  it('needs to successfully render the real name', () => {
    expect(firstRowNode.at(0).text()).toBe(supermanData.real_name);
  });

  it('needs to successfully render the superhero name', () => {
    expect(firstRowNode.at(1).text()).toBe(supermanData.superhero_name);
  });

  it('needs to successfully render the tier level', () => {
    expect(firstRowNode.at(2).text()).toBe(supermanData.tier);
  });

  it('needs to successfully render the publisher', () => {
    expect(firstRowNode.at(3).text()).toBe(supermanData.publisher);
  });

  describe('HeroPage Component', () => {
    const mockTargetIndex = 2;
    const mockState = [superhero_data[mockTargetIndex]];
    const tableWrapper = shallow(<HeroTable data={superhero_data} heroPageData={mockState}/>);
    const heroPageWrapper = mount(<HeroPage heroPageData={mockState} />);
    const spiderManData = superhero_data[2];

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

    it('should be able to load up the HeroPage component when a row is clicked', () => {
      expect(heroPageWrapper.exists()).toBe(true);
    });

    it('needs to have the character\'s profile picture image on the sidebar', () => {
      expect(heroPageWrapper.find('img.heroSidebar-img').prop('src')).toBe(spiderManData.profile_picture);
    });

    it('needs to have a working character profile on the sidebar', () => {
      expect(heroPageWrapper.find('h2.heroSidebar-h2').at(0).text()).toEqual(spiderManData.real_name);
      expect(heroPageWrapper.find('h2.heroSidebar-h2').at(2).text()).toEqual(spiderManData.superhero_name);
    });

    it('will have an animation of the sidebar menu button when clicked', () => {
      const menuBtn = heroPageWrapper.find('div.menuDivBtn');
      const sideBar = heroPageWrapper.find('nav.heroSidebar');

      menuBtn.simulate('click');

      expect(menuBtn.hasClass('menuDivBtn-animate')).toBe(true);
      expect(sideBar.hasClass('heroSidebar-hide')).toBe(true);
    });
  });
});
