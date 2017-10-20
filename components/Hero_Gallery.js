import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';
import '../styles/components/Hero_Gallery.scss';

class HeroGallery extends React.Component {

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
      <div>
        <p className="heroLink" onClick={this.props.navigator}>Back to Table page</p>
        <h1 className="page-header header-h1">{category} feats</h1>
        {render_FeatsDescription(this.props.feats)}
      </div>
    );
  }
}

HeroGallery.propTypes = {
  category: PropTypes.string,
  feats: PropTypes.array,
  navigator: PropTypes.func
};

export default HeroGallery;
