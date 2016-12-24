import React, { Component } from 'react';
import classnames from 'classnames';

export default class Checkbox extends Component {
	constructor(props) {
		super(props);
		this.state = {checkedState: "unchecked"};

		this.click = this.click.bind(this);
	}

	click() {
		console.log("Clicked!");
		this.setState({checkedState: "checked"});
	}

	render() {
		var style = {
			display: "inline"
		};
		var classes = classnames("checkbox", this.state.checkedState);

		return(
			<div style={style}>
				<div className={classes} id={this.props.idName} onClick={this.click}/>
				<h1>{this.props.boxText}</h1>
			</div>
		)
	}
}