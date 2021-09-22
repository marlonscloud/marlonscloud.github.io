import logo from './logo.svg';
import './App.css';
import React, { Profiler } from 'react';
import { event } from 'jquery';

const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: testData,
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Form />
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

class Form extends React.Component {

  state = { userName: '' };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`);
    console.log(this.state.userName);
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
