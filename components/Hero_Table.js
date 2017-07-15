import React from 'react';
import PropTypes from 'prop-types';
import HeroPage from './Hero_Page';
import '../styles/components/Hero_Table.scss';

class HeroTable extends React.Component {
  constructor(props) {
    super(props);

    this.onRowClicked = this.onRowClicked.bind(this);
    this.state = {
      isRowClicked: false
    }
  }

  onRowClicked(e) {
    this.props.showHeroData(e.currentTarget.getAttribute('data-index'));
    this.setState({isRowClicked: true});
  }

  render() {
    const bodyCol = 'heroTable-body-col';
    const spanImg = 'heroTable-body-col-span-img';
    const isClicked = this.state.isRowClicked;

    const td = children => (<td className={bodyCol}>{children}</td>);

    const render_body = props => {
      return props.map((items, idx) => {
        return (
          <tr key={idx} className="heroTable-body-row" data-index={idx} onClick={this.onRowClicked}>
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

    const render_table = () => {
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
            {render_body(this.props.data)}
          </tbody>
        </table>
      )
    }

    return (
        isClicked ? <HeroPage displayHero={this.props.displayHero}/> : render_table()
    );
  }
}

HeroTable.propTypes = {
  data: PropTypes.array,
  displayHero: PropTypes.array
};

export default HeroTable;