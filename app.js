import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';

class App extends React.Component {
  render() {
    return (<h1 className="text-center">Basic React Boilerplate</h1>)
  }
}

ReactDOM.render(<App />, document.getElementById('root'));