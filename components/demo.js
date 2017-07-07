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
        <nav className="navbar navbar-fixed-top heroNavBar">
          <div className="container-fluid">
            <div className="navbar-header">
              <h1 className="heroNavBar-h1">Superhero Feats</h1>
            </div>
            <SearchBar data={this.props.showData}/>
          </div>
        </nav>
        <HeroTable data={this.props.showData}/>
      </div>
    );
  }
}

Demo.propTypes = {
  showData: PropTypes.array
};

export default Demo;
