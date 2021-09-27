import logo from './logo.svg';
import './App.css';
import React, { Profiler } from 'react';
import { event } from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
    }
  }
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card {...profile} />)}
  </div>
);

const axios = require('axios');

class Form extends React.Component {

  state = { userName: '' };

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(response.data);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github Username"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          required />

        <button>Add card</button>
      </form>
    );
  }
}


class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div>
        <img src={profile.avatar_url}></img>
        <h2 style={{ color: 'red' }}>Name: {profile.name}</h2>
        <h2>Company Name: {profile.company}</h2>
      </div>
    );
  }
}

export default App;
