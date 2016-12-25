import React, { Component } from 'react';
import CheckboxController from './CheckboxController';

export default class App extends Component {
  render() {
    return (
    	<div className="root">
    		<div className="text">
      			<h1>Laura, will you be my girlfriend?</h1>
      		</div>

      		<CheckboxController />
      	</div>
    );
  }
}