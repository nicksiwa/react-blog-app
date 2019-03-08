import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalComponent from '../../components/share/ModalComponent';
import { acceptModal, cancelModal } from '../../actions/modal';

class ModalContainer extends Component {
  render() {
    return (
      <ModalComponent {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen,
  title: state.modal.title,
  content: state.modal.content,
});

const mapDispatchToProps = dispatch => ({
  handleAcceptModal: () => dispatch(acceptModal()),
  handleCancelModal: () => dispatch(cancelModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
