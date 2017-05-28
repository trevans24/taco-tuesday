import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';
// import Form from './Form.js';

const Page = ({ title }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <form className="col s12">
        <div>
          <div className="input-field col sm12">
            <input id="email" type="email" className="validate"/>
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div>
          <div className="input-field col sm12">
            <input id="password" type="password" className="validate"/>
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button id="login" className="btn waves-effect" type="submit">Login</button>
        <button id="signup" className="btn waves-effect" type="submit">Sign Up</button>
        <button id="signout" className="btn waves-effect hide" type="submit">Sign Out</button>
      </form>
    </div>
  </div>
);

const TacoTuesday = (props) => (
  <Page title='Taco Tuesday'/>
);

const List = (props) => (
  <Page title='List'/>
);

const Random = (props) => (
  <Page title='Randomizer'/>
);


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={TacoTuesday}/>
        <Route path="/list" component={List}/>
        <Route path="/random" component={Random}/>
      </Router>
    );
  }
}

export default App;