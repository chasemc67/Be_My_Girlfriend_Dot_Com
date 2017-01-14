import React, { Component } from 'react';
import classnames from 'classnames';

export default class Checkbox extends Component {
	constructor(props) {
		super(props);

		this.click = this.click.bind(this);
	}

	click() {
		console.log("Box is clicked");
		this.props.clickHandler();
	}

	render() {
		var style = {
			display: "inline-block"
		};

		var classes;

		if (this.props.selected) {
			classes = classnames("checkbox", "checked");
		} else {
			classes = classnames("checkbox", "unchecked");
		}


		return(
			<div style={style}>
				<div className={classes} id={this.props.idName} onClick={this.click}/>
				<h1>{this.props.boxText}</h1>
			</div>
		)
	}
}