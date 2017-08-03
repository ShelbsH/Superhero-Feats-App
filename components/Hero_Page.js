import React from 'react';
import PropTypes from 'prop-types';
import FeatsPage from './Feats_Page';
import '../styles/components/Hero_Page.scss';

class HeroPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      click: false,
      categoryName: 'Stength/Power'
    };

    this.onSidebarMenuClick = this.onSidebarMenuClick.bind(this);
    this.onCategoryListClick = this.onCategoryListClick.bind(this);
  }

  onSidebarMenuClick() {

    this.setState({
      click: !this.state.click
    });
  }

  onCategoryListClick({target}) {
    const categoryNameValue = target.innerHTML;

    this.setState({
      categoryName: categoryNameValue
    });
  }

  render() {
    const isClicked = this.state.click;
    const getAnimationClass = className => isClicked ? ' ' + className : '';

    const HeroCategoryList = ({featsCategory}) => {
      return (
        <li className="heroSidebar-li" onClick={this.onCategoryListClick}>{featsCategory}</li>
      );
    };

    const HeroCategorySidebar = () => {
      const categoryList = [
        'Stength/Power',
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
      <div className="heroPage">
        <div className="wrapper">
          <nav className={`heroSidebar${getAnimationClass('heroSidebar-hide')}`}>
            {render_HeroSidebarContent(this.props.heroPageData)}
          </nav>
        </div>
        <div className="container">
          <div className="row">
            <div
              className={`menuDivBtn${getAnimationClass('menuDivBtn-animate')}`}
              onClick={this.onSidebarMenuClick}>
              <span className="hamb-top"></span>
              <span className="hamb-middle"></span>
              <span className="hamb-bottom"></span>
            </div>
            <div className={`featsPage${getAnimationClass('featsPage-animate')}`}>
              <FeatsPage category={this.state.categoryName}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HeroPage.propTypes = {
  heroPageData: PropTypes.array
};

export default HeroPage;
