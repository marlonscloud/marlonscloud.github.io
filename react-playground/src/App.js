import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Card />
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <div>
        <img src="https://via.placeholder.com/150"></img>
        <h2 style={{ color: 'red' }}>Name: </h2>
        <h2>Company Name: </h2>
      </div>
    );
  }
}

export default App;
