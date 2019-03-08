import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrawerComponent from '../../components/share/DrawerComponent';
import { closeDrawer } from '../../actions/drawer';

class DrawerContainer extends Component {
  render() {
    return (
      <DrawerComponent {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.drawer.isOpen,
});

const mapDispatchToProps = dispatch => ({
  handleCloseDrawer: () => dispatch(closeDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer);
