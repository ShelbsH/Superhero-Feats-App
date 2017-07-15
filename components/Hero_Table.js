import React from 'react';
import PropTypes from 'prop-types';
import HeroPage from './Hero_Page';
import '../styles/components/Hero_Table.scss';

class HeroTable extends React.Component {
  constructor(props) {
    super(props);

    this.heroHandler = this
      .heroHandler
      .bind(this);
    this.state = {
      heroClicked: false
    }
  }

  heroHandler(evt) {
    this.props.showHeroData(evt.currentTarget.getAttribute('data-index'));
    this.setState({heroClicked: true});
  }

  render() {
    const bodyCol = 'heroTable-body-col';
    const spanImg = 'heroTable-body-col-span-img';

    const td = children => (
      <td className={bodyCol}>{children}</td>
    );

    const render_table = props => {

      return props.map((items, idx) => {
        return (
          <tr
            key={idx}
            className="heroTable-body-row"
            data-index={idx}
            onClick={this.heroHandler}>
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
    const th = childText => (
      <th className={headerClass}>{childText}</th>
    );

    return (
      <div>
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
        <HeroPage displayHero={this.props.displayHero} />
      </div>
    );
  }
}

HeroTable.propTypes = {
  data: PropTypes.array
};

export default HeroTable;