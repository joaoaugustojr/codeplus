import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Bread extends Component {
	constructor(props) {
		super(props);
		this.state = {
			caminho: this.props.caminho
		};
	}

	render() {
		return (
			<div>
				<span>{this.props.caminho}</span>
			</div>
		);
	}
}

if (document.getElementById('breadcrumbs')) {
	var caminho = document.getElementById('breadcrumbs').getAttribute('caminho');
	ReactDOM.render(<Bread caminho={caminho} />, document.getElementById('breadcrumbs'));
}
