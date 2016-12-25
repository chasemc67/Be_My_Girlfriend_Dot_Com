import React, { Component } from 'react';

export default class SubmitButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="submitButton" onClick={this.props.clickHandler}>
				<h1>Submit</h1>
			</div>
		);
	}
}