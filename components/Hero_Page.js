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
      'Durability',
      'Misc'
    ];

    const HeroCategory = ({featsCategory}) => <li className="heroSidebar-li">{featsCategory}</li>

    const HeroCategoryList = () => {
      return (
        <ul className="heroSidebar-ul">
          {categoryList.map((list, index) => <HeroCategory key={index} featsCategory={list}/>)}
        </ul>
      );
    };

    const HeroIcon = ({icon}) => {
      return (
        <div className="heroSidebar-profile-icon">
          <img src={icon}/>
        </div>
      );
    };

    const CharacterInfoSidebar = props => {
      return (
        <div className="heroSidebar-profile-char">
          <img className="heroSidebar-profile-img" src={props.image}/>
          <h2 className="heroSidebar-h2">{props.realName}</h2>
          <h2 className="heroSidebar-h2">As</h2>
          <h2 className="heroSidebar-h2">{props.superName}</h2>
        </div>
      );
    };

    const HeroSidebar = props => {
      return (
        <div>
          <nav className="heroSidebar">
            <div className="heroSidebar-profile">
              <HeroIcon icon="../images/sidebar_icon.png"/>
              <CharacterInfoSidebar
                realName={props.real_name}
                superName={props.superhero_name}
                image="../images/carol_danvers_profile.png"/>
              <div className="heroSidebar-profile-category">
                <HeroCategoryList/>
              </div>
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
            superhero_name={lists.superhero_name} />);
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
