import React from 'react';
import PropTypes from 'prop-types';
import HeroPage from './Hero_Page';
import '../styles/components/Hero_Table.scss';

class HeroTable extends React.Component {
  constructor(props) {
    super(props);

    this.onRowClicked = this.onRowClicked.bind(this);
  }

  onRowClicked({currentTarget}) {
    this.props.showHeroData(currentTarget.dataset.index);
  }

  render() {
    const bodyCol = 'heroTable-body-col';
    const spanImg = 'heroTable-body-col-span-img';

    const td = children => (<td className={bodyCol}>{children}</td>);

    const render_tBody = props => {
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
    const HeroHeader = ({childText}) => <th className={headerClass}>{childText}</th>;
    // const th = childText => (<th className={headerClass}>{childText}</th>);

    const render_HeroTable = () => {
      return (
        <table className="heroTable">
          <thead className="heroTable-head">
            <tr>
              <HeroHeader childText='Real Name'/>
              <HeroHeader childText='Super Name'/>
              <HeroHeader childText='Tier Level'/>
              <HeroHeader childText='Publisher'/>
            </tr>
          </thead>
          <tbody className="heroTable-body">
            {render_tBody(this.props.data)}
          </tbody>
        </table>
      );
    };

    const showHeroPageIfClicked = () => {
      return this.props.heroPageData ? <HeroPage heroPageData={this.props.heroPageData} /> : render_HeroTable();
    };

    return (
      showHeroPageIfClicked()
    );
  }
}

HeroTable.propTypes = {
  data: PropTypes.array,
  heroPageData: PropTypes.array,
  showHeroData: PropTypes.func
};

export default HeroTable;
