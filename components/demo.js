import React from 'react';
import SearchBar from './SearchBar';
import HeroTable from './Hero_Table.js';
import '../styles/main.scss';
import PropTypes from 'prop-types';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'SuperheroFeats';
  }
  render() {
    return (
      <div className="app-root">
        <h1>Superhero Feats</h1>
        <SearchBar data={this.props.showData} />
        <HeroTable data={this.props.showData} />
      </div>
    );
  }
}

Demo.propTypes = {
  showData: PropTypes.array
};

export default Demo;
