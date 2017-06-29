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
          <tr key={idx} className="heroTable-body-row">
            <td className="heroTable-body-col">
              <span><img className="heroTable-body-col-span-img" src={items.thumbnail}/></span>{items.real_name}</td>
            <td className="heroTable-body-col">{items.superhero_name}</td>
            <td className="heroTable-body-col">{items.tier}</td>
            <td className="heroTable-body-col">{items.publisher}</td>
          </tr>
        );
      });
    };

    return (
      <table className="heroTable">
        <thead className="heroTable-head">
          <tr>
            <th className="heroTable-header">Real Name</th>
            <th className="heroTable-header">Super Name</th>
            <th className="heroTable-header">Tier Level</th>
            <th className="heroTable-header">Publisher</th>
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