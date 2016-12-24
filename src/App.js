import React, { Component } from 'react';
import Checkbox from './Checkbox';

export default class App extends Component {
  render() {
    return (
    	<div className="root">
    		<div className="text">
      			<h1>Laura, will you be my girlfriend?</h1>
      		</div>

      		<div className="boxes">
      			<Checkbox idName = "yesBox" boxText="Yes!"/>
      			<Checkbox idName = "noBox" boxText="No Way!"/>
      		</div>
      	</div>
    );
  }
}