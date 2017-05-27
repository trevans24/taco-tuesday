import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
      <p>
        <Link to="/">Taco Tuesday</Link>
      </p>
      <p>
        <Link to="/list">List</Link>
      </p>
      <p>
        <Link to="/random">Randomizer</Link>
      </p>
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