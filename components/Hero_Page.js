import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Hero_Page.scss';

class HeroPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.displayHero);
    return(
      <div className="heroPage">
        <h1>Welcome to the character profile page</h1>
        <p>{this.props.displayHero}</p>
      </div>
    )
  }
}

export default HeroPage;