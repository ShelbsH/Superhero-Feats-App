import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Hero_Page.scss';

class HeroPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categoryList = [
      'Stength/Power',
      'Speed/Agility',
      'Martial Arts/Training',
      'Skills/Fights',
      'Durability/Endurance',
      'Misc'
    ];

    const HeroCategoryList= ({featsCategory}) => <li className="heroSidebar-li">{featsCategory}</li>;

    const HeroCategorySidebar = () => {
      return (
        <div className="heroSidebar-profile-category">
          <ul className="heroSidebar-ul">
            {categoryList.map((list, index) => <HeroCategoryList key={index} featsCategory={list} />)}
          </ul>
        </div>
      );
    };

    const HeroIconSidebar = ({icon}) => {
      return (
        <div className="heroSidebar-profile-icon">
          <img src={icon} />
        </div>
      );
    };

    const CharacterInfoSidebar = props => {
      return (
        <div className="heroSidebar-profile-char">
          <img className="heroSidebar-profile-img" src={props.profile_picture} />
          <h2 className="heroSidebar-h2">{props.real_name}</h2>
          <h2 className="heroSidebar-h2">As</h2>
          <h2 className="heroSidebar-h2">{props.superhero_name}</h2>
        </div>
      );
    };

    const HeroSidebar = props => {
      return (
        <div>
          <nav className="heroSidebar">
            <div className="heroSidebar-profile">
              <HeroIconSidebar icon="../images/sidebar_icon.png" />
              <CharacterInfoSidebar
                real_name={props.real_name}
                superhero_name={props.superhero_name}
                profile_picture={props.profile_picture} />
              <HeroCategorySidebar />
            </div>
          </nav>
        </div>
      );
    };

    const render_HeroSidebar = props => {
      return props.map((lists, index) => {
        return (
          <HeroSidebar
            key={index}
            real_name={lists.real_name}
            superhero_name={lists.superhero_name}
            profile_picture={lists.profile_picture} />
        );
      });
    };

    return (
      <div className="heroPage">
        <div className="wrapper">
          {render_HeroSidebar(this.props.heroPageData)}
        </div>
      </div>
    );
  }
}

HeroPage.propTypes = {
  heroPageData: PropTypes.array
};

export default HeroPage;
