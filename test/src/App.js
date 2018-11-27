import React, { Component } from 'react';
import Home from './components/Home'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Router>

          <Route exact={true} path={"/"} component={Home} />

        </Router>
      </div>
    );
  }
}



export default connect()(App);
