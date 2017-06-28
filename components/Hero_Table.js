import React from 'react';
import PropTypes from 'prop-types';
import '../styles/partials/table.scss';

class HeroTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const render_table = props => {
      return props.map((items, idx) => {
        return (
          <tr key={idx}>
            <td><img src={items.thumbnail} width="50" height="50"/></td>
            <td>{items.real_name}</td>
            <td>{items.superhero_name}</td>
            <td>{items.tier}</td>
            <td>{items.publisher}</td>
          </tr>
        );
      });
    };

    return (
      <table className="table heroTable">
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Real Name</th>
            <th>Super Name</th>
            <th>Tier Level</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {render_table(this.props.data)}
        </tbody>
      </table>
    );
  }
}

HeroTable.propTypes = {
  data: PropTypes.array
};

export default HeroTable;