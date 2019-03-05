import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const LoginLayout = lazy(() => import('../layouts/LoginLayout'));
const AppLayout = lazy(() => import('../layouts/AppLayout'));

class MainRoute extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/login" component={LoginLayout} />
            <PrivateRoute path="/" component={AppLayout} isAuthenticated={isAuthenticated} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.login.isAuthenticated,
});

export default connect(mapStateToProps)(MainRoute);
