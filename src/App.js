import React, { Component } from 'react';
import CheckboxController from './CheckboxController';
import SubmitButton from './SubmitButton';

import ModalWindow from './ModalWindow';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {modalOpen: false};

    this.submitHandler = this.submitHandler.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  submitHandler() {
    console.log("Openning modal");
    this.setState({modalOpen: true});
  }


  closeModal() {
    this.setState({modalOpen: false});
  }

  render() {
    return (
    	<div className="root">
    		<div className="text">
      			<h1>Laura, will you be my girlfriend?</h1>
      	</div>

      		<CheckboxController />

          <SubmitButton clickHandler={this.submitHandler}/>
          <ModalWindow isOpen={this.state.modalOpen} closeModal={this.closeModal} />
      </div>
    );
  }
}