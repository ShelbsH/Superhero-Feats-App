import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Hero_Page.scss';

class HeroPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      click: false,
      animateSidebar: '',
      animateMenuIcon: ''
    };

    this.onSidebarMenuClick = this.onSidebarMenuClick.bind(this);
  }

  onSidebarMenuClick() {

    this.setState({
      click: true,
      animateSidebar: ' heroSidebar-animate',
      animateMenuIcon: ' menuIconDiv-animate'
    });
  }

  render() {
    const addAnimateSidebar = this.state.click ? this.state.animateSidebar : '';
    const addAnimateMenuIcon = this.state.click ? this.state.animateMenuIcon : '';

    const HeroCategoryList = ({featsCategory}) => <li className="heroSidebar-li">{featsCategory}</li>;

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
        <div className="heroSidebar-characterDetail">
          <img className="heroSidebar-img" src={props.profile_picture}/>
          <h2 className="heroSidebar-h2">{props.real_name}</h2>
          <h2 className="heroSidebar-h2">As</h2>
          <h2 className="heroSidebar-h2">{props.superhero_name}</h2>
        </div>
      );
    };

    const HeroSidebar = props => {
      return (
        <div>
          <div className="heroSidebar-profile">
            <CharacterInfoSidebar
              real_name={props.real_name}
              superhero_name={props.superhero_name}
              profile_picture={props.profile_picture}/>
            <HeroCategorySidebar/>
          </div>
        </div>
      );
    };

    const render_HeroSidebar = props => {
      if (Array.isArray(props)) {
        return props.map((lists, index) => {
          return (
            <HeroSidebar
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
          <nav className={'heroSidebar' + addAnimateSidebar}>
            {render_HeroSidebar(this.props.heroPageData)}
          </nav>
          <div className={'heroSidebar-menuIconDiv' + addAnimateMenuIcon}>
            <img src="../images/sidebar_icon.png" onClick={this.onSidebarMenuClick}/>
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
