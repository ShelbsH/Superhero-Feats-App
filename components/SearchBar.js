import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'SearchBar';
  }

  render() {
    return (
      <input type="text" />
    );
  }
}

export default SearchBar;