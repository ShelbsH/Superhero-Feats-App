import React from 'react';
import SearchBar from './SearchBar';
import Superhero_Table from './superhero_table.js';
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
        <Superhero_Table foo={this.props.bar} />
      </div>

    );
  }
}

export default Demo;
