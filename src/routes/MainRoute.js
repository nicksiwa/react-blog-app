import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppLayout, LoginLayout } from '../layouts';
import PrivateRoute from './PrivateRoute';

class MainRoute extends Component {
  state = {
    isAuthenticated: false,
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginLayout} />
          <PrivateRoute isAuthenticated={this.state.isAuthenticated} path="/" component={AppLayout} />
        </Switch>
      </Router>
    );
  }
}

export default MainRoute;
