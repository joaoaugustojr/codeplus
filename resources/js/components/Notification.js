import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NotificationContainer } from 'react-notifications';

export default class Notification extends Component {
	render() {
		return (
			<div>
				<NotificationContainer />
			</div>
		);
	}
}

if (document.getElementById('notification')) {
	ReactDOM.render(<Notification />, document.getElementById('notification'));
}
