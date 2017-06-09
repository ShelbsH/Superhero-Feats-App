import React from 'react';

class SuperTable_Head extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table>
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
          {this.props.tableBody}
        </tbody>
      </table>
    );
  }
};

class SuperTable_Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hero_data = this.props.foo.map((items, idx) => {
      return (
        <tr key={idx}>
          <td><img src={items.thumbnail} width="50" height="50" /></td>
          <td>{items.real_name}</td>
          <td>{items.superhero_name}</td>
          <td>{items.tier}</td>
          <td>{items.publisher}</td>
        </tr>
      )
    });
    return (
      <table>
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
          {hero_data}
        </tbody>
      </table>
    );
  }
};

export default SuperTable_Body;