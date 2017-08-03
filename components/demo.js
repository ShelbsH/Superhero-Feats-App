import React from 'react';
import SearchBar from './SearchBar';
import HeroTable from './Hero_Table.js';
import PropTypes from 'prop-types';

import '../styles/components/demo.scss';
import '../styles/main.scss';

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.displayName = 'SuperheroFeats';
    this.showHeroHandler = this.showHeroHandler.bind(this);

    this.state = {
      heroData: undefined
    };
  }

  /** 
   * @method showHeroHandler(event)
   * @requires {target.dataset.index} - index refers to id of a hero
   * @param event {SyntheticEvent} - MouseEvent from clicking on a row in <Hero_Table> componenet
   *
   * Takes the index of the hero, gets the hero data, and then displays the hero data in local
   * state.
   */

  showHeroHandler({currentTarget}) {

    const id = currentTarget.dataset.index;
    const getHeroData = (data, heroId) => data.filter((item) => item.id === heroId);
    const showHeroData = getHeroData(this.props.showData, id);

    this.setState({
      heroData: showHeroData
    });
  }

  render() {
    return (
      <div className="app-root">
        <nav className="navbar navbar-fixed-top heroNavBar">
          <div className="container-fluid">
            <div className="navbar-header">
              <h1 className="heroNavBar-h1">Superhero Feats</h1>
            </div>
            <SearchBar data={this.props.showData} showHeroData={this.showHeroHandler} />
          </div>
        </nav>
        <HeroTable
          data={this.props.showData}
          showHeroData={this.showHeroHandler}
          heroPageData={this.state.heroData}/>
      </div>
    );
  }
}

Demo.propTypes = {
  showData: PropTypes.array
};

export default Demo;
