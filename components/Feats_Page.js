import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Feats_Page.scss';

class FeatsPage extends React.Component {

  render() {
    return (
      <div>
        <h1 className="page-header header-h1">{this.props.category} feats</h1>
      </div>
    );
  }
}

FeatsPage.propTypes = {
  category: PropTypes.string
};

export default FeatsPage;