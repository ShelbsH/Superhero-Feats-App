import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Hero_Table.scss';

class HeroTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bodyCol = 'heroTable-body-col';
    const spanImg = 'heroTable-body-col-span-img';

    const td = children => (<td className={bodyCol}>{children}</td>);

    const render_table = props => {

      return props.map((items, idx) => {
        return (
          <tr key={idx} className="heroTable-body-row">
            <td className={bodyCol}>
              <span><img className={spanImg} src={items.thumbnail}/></span>{items.real_name}
            </td>
            {td(items.superhero_name)}
            {td(items.tier)}
            {td(items.publisher)}
          </tr>
        );
      });
    };

    const headerClass = 'heroTable-header';
    const th = childText => (<th className={headerClass}>{childText}</th>);

    return (
      <table className="heroTable">
        <thead className="heroTable-head">
          <tr>
            {th('Real Name')}
            {th('Super Name')}
            {th('Tier Level')}
            {th('Publisher')}
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