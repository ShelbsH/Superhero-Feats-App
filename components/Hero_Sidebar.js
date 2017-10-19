import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Hero_Sidebar.scss';

class HeroSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.onCategoryListClick = this.onCategoryListClick.bind(this);
  }

  onCategoryListClick({target}) {
    this.props.listClick(target.innerHTML);
  }

  render() {

    const HeroCategoryList = ({featsCategory}) => {
      return (
        <li className="heroSidebar-li" onClick={this.onCategoryListClick}>{featsCategory}</li>
      );
    };

    const HeroCategorySidebar = () => {
      const categoryList = [
        'Strength/Power',
        'Speed/Agility',
        'Martial Arts/Training',
        'Skills/Fights',
        'Durability/Endurance',
        'Misc'
      ];

      return (
        <div className="heroSidebar-category">
          <ul className="heroSidebar-ul">
            {categoryList.map((list, index) => <HeroCategoryList key={index} featsCategory={list}/>)}
          </ul>
        </div>
      );
    };

    const CharacterInfoSidebar = props => {
      return (
        <div className="heroSidebar-characterDetails">
          <img className="heroSidebar-img" src={props.profile_picture}/>
          <h2 className="heroSidebar-h2">{props.real_name}</h2>
          <h2 className="heroSidebar-h2">As</h2>
          <h2 className="heroSidebar-h2">{props.superhero_name}</h2>
        </div>
      );
    };

    const HeroSidebarContent = props => {
      return (
        <div>
          <div className="heroSidebar-content">
            <CharacterInfoSidebar
              real_name={props.real_name}
              superhero_name={props.superhero_name}
              profile_picture={props.profile_picture}/>
            <HeroCategorySidebar/>
          </div>
        </div>
      );
    };

    const render_HeroSidebarContent = props => {
      if (Array.isArray(props)) {
        return props.map((lists, index) => {
          return (<HeroSidebarContent
            key={index}
            real_name={lists.real_name}
            superhero_name={lists.superhero_name}
            profile_picture={lists.profile_picture}/>);
        });
      }
    };

    return (
      <div>
        <div className="wrapper">
          <nav className={this.props.heroSidebarAnimation}>
            {render_HeroSidebarContent(this.props.heroPageData)}
          </nav>
        </div>
        <div className="container">
          <div className="row">
            <div
              className={this.props.heroSidebarMenuAnimation}
              onClick={this.props.onSidebarMenuClick}>
              <span className="hamb-top"></span>
              <span className="hamb-middle"></span>
              <span className="hamb-bottom"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HeroSidebar.propTypes = {
  heroPageData: PropTypes.array,
  listClick: PropTypes.func,
  heroSidebarAnimation: PropTypes.string,
  heroSidebarMenuAnimation: PropTypes.string,
  onSidebarMenuClick: PropTypes.func,
  navigator: PropTypes.func
};

export default HeroSidebar;
