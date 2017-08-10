import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';
import '../styles/components/Feats_Page.scss';

class FeatsPage extends React.Component {

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
    console.log(render_FeatsDescription(this.props.feats));
    return (
    //The image gallery would go on here and would be based off of a state
      <div>
        <h1 className="page-header header-h1">{category} feats</h1>
        {render_FeatsDescription(this.props.feats)}
      </div>
    );
  }
}

FeatsPage.propTypes = {
  category: PropTypes.string,
  feats: PropTypes.array
};

export default FeatsPage;