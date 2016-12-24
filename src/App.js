import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
    	<div className="root">
    		<div className="text">
      			<h1>Laura, will you be my girlfriend?</h1>
      		</div>

      		<div className="boxes">
      			<div className="checkbox checked" id="yesBox"/>
      			<div className="checkbox unchecked" id="noBox"/> 
      		</div>
      	</div>
    );
  }
}