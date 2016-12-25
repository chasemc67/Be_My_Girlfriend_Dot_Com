import React, { Component } from 'react';
import Modal from "react-modal";

export default class ModalWindow extends React.Component {
    constructor () {
      super();
    }

    render () {
      return (
        <div>
          <Modal contentLabel={"Terms and Conditions"} isOpen={this.props.isOpen} style={{overlay: {backgroundColor: 'rgba(0, 0, 0, 0.4)'}}}>
            <h1>Terms and Conditions</h1>
            <button onClick={this.props.closeModal}>Close</button>
          </Modal>
        </div>
      );
    }
  }
