import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Login from './Login';
import SignUp from './SignUp';
import Header from './Header';
import Schedule from './Schedule';
import Aircraft from './Aircraft';
import AircraftList from './AircraftList';
import User from './User';
import UsersList from './UsersList';
import './App.css';

const isLoggedIn = true;

const AppContainer = styled.main`
  margin: 0 auto;
  max-width: 1500px;
  width: 1500px;
`;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isLoggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    !isLoggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

class App extends Component {
  state = {
    aircraft: [],
    users: [],
  }

  componentDidMount() {
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
      <Router>
        <div className="App">
          { isLoggedIn &&
            <Header />
          }
          <AppContainer>
            <PublicRoute path="/login" component={Login} />
            <PublicRoute path="/sign-up" component={SignUp} />
            <PrivateRoute exact path="/" component={AircraftList} />
            <PrivateRoute path="/aircraft" component={AircraftList} />
            <PrivateRoute path="/schedule" component={Schedule} />
            <PrivateRoute path="/aircraft/:aircraftId" component={Aircraft} />
            <PrivateRoute path="/users/:userId" component={User} />
            <PrivateRoute path="/users" component={UsersList} />
          </AppContainer>
        </div>
      </Router>
    );
  }
}
export default App;
