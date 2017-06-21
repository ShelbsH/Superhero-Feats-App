import React from 'react';
import SearchBar from './SearchBar';
import HeroTable from './Hero_Table.js';
import '../styles/main.scss';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'SuperheroFeats';
  }

  render() {
    return (
      <div className="app-root">
        <h1>Superhero Feats</h1>
        <SearchBar />
        <HeroTable data={this.props.showData} />
      </div>
    );
  }
}

export default Demo;
