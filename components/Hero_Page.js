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
              <li className="heroSidebar-li">{list.real_name}</li>
              <li className="heroSidebar-li">{list.superhero_name}</li>
              <li className="heroSidebar-li">{list.tier}</li>
              <li className="heroSidebar-li">{list.publisher}</li>
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
                <img className="heroSidebar-profile-img" src="../images/carol_danvers_profile.png" />
                <h2 className="heroSidebar-profile-char-h1">Carol Danvers</h2>
                <h2 className="heroSidebar-profile-char-h1">As</h2>
                <h2 className="heroSidebar-profile-char-h1">Captain Marvel</h2>
              </div>
              <div className="heroSidebar-profile-category">
                <ul className="heroSidebar-ul">
                  {charInfo()}
                  <li className="heroSidebar-li">Martial Arts/Training</li>
                  <li className="heroSidebar-li">Power/Strength</li>
                </ul>
              </div>
            </div>
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