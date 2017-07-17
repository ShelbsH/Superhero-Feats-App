import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Hero_Page.scss';

class HeroPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const charInformation = this.props.displayHero.map((list, idx) => {
      return (
        <h1 key={idx}><li>{list}</li></h1>
      );
    });
    return(
      <div className="heroPage">
        <h1>Character profile page</h1>
        <ul>
          {charInformation}
        </ul>
      </div>
    );
  }
}

HeroPage.propTypes = {
  displayHero: PropTypes.array
};

export default HeroPage;