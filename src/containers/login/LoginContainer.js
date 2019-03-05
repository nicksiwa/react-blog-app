import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginComponent from '../../components/login/LoginComponent';
import { login } from '../../actions/login';

class LoginContainer extends Component {
  render() {
    const { handleLogin, isAuthenticated } = this.props;

    if (isAuthenticated) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <LoginComponent handleLogin={handleLogin} />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.login.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  handleLogin: () => dispatch(login()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
