import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'SearchBar';

    this.keyChange = this
      .keyChange
      .bind(this);

    this.state = {
      keyValues: ''
    };
  }

  keyChange(evt) {
    this.setState({keyValues: evt.target.value});
  }

  render() {

    const returnHeroNamesOnKey = props => {
      let keyInput = this.state.keyValues.toLowerCase();
      let keyLength = keyInput.length;

      if (keyInput) {
        return props.reduce((acc, curr) => {
          let realName = curr.real_name;

          if (keyInput.indexOf(realName.toLowerCase().slice(0, keyLength)) === 0) {
            acc.push(realName);
          }
          return acc;
        }, []);
      }
    };

    const renderHeroList = (names) => {
      const getHeroNames = returnHeroNamesOnKey(names);
      if (this.state.keyValues) {
        return getHeroNames.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          );
        });
      }
    };

    const autoComplete = renderHeroList(this.props.data);

    return (
      <div className="auto-complete">
        <p>Search for character:</p>
        <input type="text" onKeyUp={this.keyChange}/>
        <ul>
          {autoComplete}
        </ul>
      </div>
    );
  }
}

SearchBar.propTypes = {
  data: PropTypes.array
};

export default SearchBar;