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
  }
  render() {
    return (
      <div className="app-root">
        <nav className="navbar navbar-default navbar-fixed-top heroNavBar">
          <h1 className="heroNavBar-h1">Superhero Feats</h1>
          <div className="container-fluid"></div>
        </nav>
        <SearchBar data={this.props.showData}/>
        <HeroTable data={this.props.showData}/>
      </div>
    );
  }
}

Demo.propTypes = {
  showData: PropTypes.array
};

export default Demo;
