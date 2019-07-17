import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	validarUsuario() {
		alert('validado');
	}

	render() {
		return (
			<div class="loginBox bg-white text-center">
				<div class="codePlusLogo text-center d-inline-block justify-content-center">
					<img class="text-center" src={this.props.img} />
					<ion-icon class="dropIcon" name="arrow-dropdown" />
				</div>

				<form class="d-inline-block formLogin" action="#" method="POST">
					<input type="hidden" name="_token" value={this.props.token} />
					<div class="groupInput">
						<div class="iconLogin">
							<ion-icon name="apps" />
						</div>
						<input type="number" name="store_id" placeholder="Código do Estabelecimento" />
					</div>
					<div class="groupInput">
						<div class="iconLogin">
							<ion-icon name="person" />
						</div>
						<input type="text" name="login" placeholder="Usuário" />
					</div>
					<div class="groupInput">
						<div class="iconLogin">
							<ion-icon name="key" />
						</div>
						<input type="password" name="password" placeholder="Senha" />
					</div>

					<button class="btnLogin" onClick={this.validarUsuario}>
						Login
					</button>
				</form>

				<p class="text-capitalize textSuport">
					<small class="font-weight-light">{this.props.msg}</small>
				</p>
			</div>
		);
	}
}

if (document.getElementById('login')) {
	var msg = document.getElementById('login').getAttribute('msgSuport');
	var token = document.getElementById('login').getAttribute('token');
	var img = document.getElementById('login').getAttribute('img');
	ReactDOM.render(<Login msg={msg} token={token} img={img} />, document.getElementById('login'));
}
