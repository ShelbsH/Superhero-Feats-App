import React from 'react';
import PropTypes from 'prop-types';

class HeroPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.displayHero);
    return(
      <div>
        <h1>Welcome to the character profile page</h1>
        <p>{this.props.displayHero}</p>
      </div>
    )
  }
}

export default HeroPage;