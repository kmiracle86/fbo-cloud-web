import React, { Component } from 'react';
import Aircraft from './Aircraft';
import User from './User';
import './App.css';

class App extends Component {
  state = {
    aircraft: [],
    users: [],
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/aircraft', {
      accept: 'application/json',
    })
      .then(res => res.json())
      .then(aircraft => {
        this.setState({ aircraft: aircraft.data })
      });

    fetch('http://localhost:4000/api/users', {
      accept: 'application/json',
    })
      .then(res => res.json())
      .then(users => {
        this.setState({ users: users.data })
      });
  }

  render() {
    return (
      <div className="App">
        <h2>Aircraft</h2>
        {this.state.aircraft.map(aircraft => (
          <Aircraft key={aircraft.id} aircraft={aircraft} />
        ))}
        <h2>Users</h2>
        {this.state.users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default App;
