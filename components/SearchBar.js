import React from 'react';
import '../styles/components/SearchBar.scss';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'SearchBar';

    this.keyChange = this.keyChange.bind(this);

    this.onAutoCompleteClick = this.onAutoCompleteClick.bind(this);

    this.state = {
      keyValues: ''
    };
  }

  keyChange({target}) {
    this.setState({keyValues: target.value});
  }

  onAutoCompleteClick({currentTarget}) {
    this.props.showHeroData(currentTarget.dataset.index);
  }

  render() {

    /**
     * @method returnHeroNamesOnKey
     * @param  {Array} heroNames - will be passed as an array argument
     * @return {Array} Return an array list of objects that match the input keys
     */
    const returnHeroNamesOnKey = heroNames => {
      let keyInput = this.state.keyValues.toLowerCase();
      let keyLength = keyInput.length;

      if (keyInput) {
        return heroNames.reduce((acc, curr) => {
          let realName = curr.real_name.toLowerCase();

          if (keyInput.indexOf(realName.slice(0, keyLength)) === 0) {
            acc.push(curr);
          }
          return acc;
        }, []);
      }
    };

    /**
     * @method renderHeroList
     * @param  {Array} props - will be passed as an array when the component is called
     * @return  {Array} Return the lists of names and render the elements
     */
    const renderHeroList = props => {
      const getHeroNames = returnHeroNamesOnKey(props);

      if (this.state.keyValues) {
        return getHeroNames.map((item, index) => {
          return (
            <li className="auto-complete-li" key={index} data-index={item.id} onClick={this.onAutoCompleteClick}>{item.real_name} as {item.superhero_name}</li>
          );
        });
      }
    };

    const autoComplete = renderHeroList(this.props.data);

    return (
      <div>
        <form className="navbar-form navbar-nav searchBar">
        <div className="form-group">
          <input type="text" className="searchBar-inputText" onKeyUp={this.keyChange} placeholder="Search"/>
          <ul className="auto-complete">
            {autoComplete}
          </ul>
        </div>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  data: PropTypes.array,
  showHeroData: PropTypes.func
};

export default SearchBar;
