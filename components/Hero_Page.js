import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Hero_Page.scss';

class HeroPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const charInfo = () => {
      if (Array.isArray(this.props.heroPageData)) {
        return this.props.heroPageData.map((list, idx) => {
          return (
            <div key={idx}>
              <li>{list.thumbnail}</li>
              <li>{list.real_name}</li>
              <li>{list.superhero_name}</li>
              <li>{list.tier}</li>
              <li>{list.publisher}</li>
            </div>
          );
        });
      }
    };

    return (
      <div className="heroPage">
        <div className="wrapper">
          <nav className="heroSidebar">
            <div className="heroSidebar-profile">
              <div className="heroSidebar-profile-icon">
                <img src="../images/sidebar_icon.png" />
              </div>
              <div className="heroSidebar-profile-char">
                <img className="heroSidebar-profile-img" src="https://static.comicvine.com/uploads/scale_small/4/46646/4575457-7128683111-GLLA_.jpg" />
              </div>
            </div>
            <ul className="sidebar-nav">
              {charInfo()}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

HeroPage.propTypes = {
  heroPageData: PropTypes.array
};

export default HeroPage;