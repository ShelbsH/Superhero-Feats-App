import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Hero_Page.scss';

class HeroPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const charInfo = this.props.heroPageData.map((list, idx) => {
      return (
        <h2 key={idx}>
          <li>{list.thumbnail}</li>
          <li>{list.real_name}</li>
          <li>{list.superhero_name}</li>
          <li>{list.tier}</li>
          <li>{list.publisher}</li>
        </h2>
      );
    });
    return(
      <div className="heroPage">
        <h1>Character profile page</h1>
        <ul>
          {charInfo}
        </ul>
      </div>
    );
  }
}

HeroPage.propTypes = {
  heroPageData: PropTypes.array
};

export default HeroPage;