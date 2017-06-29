import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Hero_Table.scss';

class HeroTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const render_table = props => {
      return props.map((items, idx) => {
        return (
          <tr key={idx}>
            <td>
              <span><img src={items.thumbnail}/></span>{items.real_name}</td>
            <td>{items.superhero_name}</td>
            <td>{items.tier}</td>
            <td>{items.publisher}</td>
          </tr>
        );
      });
    };

    return (
      <table className="heroTable">
        <thead className="heroTable-head">
          <tr>
            <th>Real Name</th>
            <th>Super Name</th>
            <th>Tier Level</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody className="heroTable-body">
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