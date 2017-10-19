import React from 'react';
import HeroSidebar from './Hero_Sidebar';
import HeroGallery from './Hero_Gallery';
import PropTypes from 'prop-types';
import '../styles/components/Hero_Page.scss';

class HeroPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryName: 'Strength/Power',
      click: false
    };

    this.handleListClick = this.handleListClick.bind(this);
    this.onSidebarMenuClick = this.onSidebarMenuClick.bind(this);
  }

  handleListClick(categoryValue) {
    this.setState({
      categoryName: categoryValue
    });
  }

  onSidebarMenuClick() {
    this.setState({
      click: !this.state.click
    });
  }

  render() {

    const isClicked = this.state.click;
    const getAnimationClass = className => isClicked ? ' ' + className : '';

    return (
      <div className="heroPage">
        <HeroSidebar heroPageData={this.props.heroPageData} 
         heroSidebarAnimation={`heroSidebar${getAnimationClass('heroSidebar-hide')}`}
         heroSidebarMenuAnimation={`menuDivBtn${getAnimationClass('menuDivBtn-animate')}`}
         navigator={this.props.navigator}
         listClick={this.handleListClick}
         onSidebarMenuClick={this.onSidebarMenuClick} />
        <div className={`heroGalleryWrapper${getAnimationClass('heroGallery-animate')}`}>
          <HeroGallery feats={this.props.heroPageData} category={this.state.categoryName} />
        </div>
      </div>
    );
  }
}

export default HeroPage;

HeroPage.propTypes = {
  heroPageData: PropTypes.array,
  listClick: PropTypes.func,
  navigator: PropTypes.func
};
