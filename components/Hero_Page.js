import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';
import '../styles/components/Hero_Page.scss';

class HeroPage extends React.Component {

  render() {
    const category = this.props.category;

    const FeatsDescription = ({title, description}) => {
      return (
        <div>
          <h2 className="header-h2">Title: {title}</h2>
          <p>Description: {description}</p>
        </div>
      );
    };

    const render_FeatsDescription = props => {
      if (Array.isArray(props)) {
        return props.map((lists, index) => {
          if (lists.feats[category]) {
            return (
              <div key={index}>
                <FeatsDescription
                  title={lists.feats[category].title}
                  description={lists.feats[category].description}/>
                <Gallery images={lists.feats[category].images} backdropClosesModal={true}/>
              </div>
            );
          }
        });
      }
    };

    return (
    //The image gallery would go on here and would be based off of a state
      <div>
        <h1 className="page-header header-h1">{category} feats</h1>
        {render_FeatsDescription(this.props.feats)}
      </div>
    );
  }
}

HeroPage.propTypes = {
  category: PropTypes.string,
  feats: PropTypes.array
};

export default HeroPage;