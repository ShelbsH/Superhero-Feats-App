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

  showHeroHandler(id) {

    //Needs to be refactored: replace the showData props with a parameter.
    const showHeroData = (heroId) => this.props.showData.filter((item) => item.id === heroId);
    const getHeroData = showHeroData(id);

    this.setState({
      heroData: getHeroData
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
