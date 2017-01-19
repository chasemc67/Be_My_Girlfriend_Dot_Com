import React, { Component } from 'react';
import CheckboxController from './CheckboxController';
import SubmitButton from './SubmitButton';

import ModalWindow from './ModalWindow';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      answer: null
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.checkboxCallback = this.checkboxCallback.bind(this);
  }

  submitHandler() {
    if (this.state.answer == null) {
      return;
    }
    console.log("Openning modal");
    this.setState({modalOpen: true});

    if (this.state.answer == "declined") {
      $.ajax({
        type: 'POST',
        url: '/contact',
        data: {
          message: "She said no"
        }
      })
        .done((data) => {
          console.log(data.message);
        })
        .fail((jqXhr) => {
          // console.log(jqXhr.responseJSON.message);
          console.log("Post request failed");
        });
    }
  }


  closeModal() {
    this.setState({modalOpen: false});
  }

  checkboxCallback(answer){
    this.setState({answer: answer});
  }

  render() {
    return (
    	<div className="root">
    		<div className="text">
      			<h1>Laura, will you be my girlfriend?</h1>
      	</div>

      		<CheckboxController callback={this.checkboxCallback} />

          <SubmitButton clickHandler={this.submitHandler}/>
          <ModalWindow modalType={this.state.answer} isOpen={this.state.modalOpen} closeModal={this.closeModal} />
      </div>
    );
  }
}