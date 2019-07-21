import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			store_id: '',
			login: '',
			password: '',
			token: this.props.token
		};

		this.onChange = (ev) => {
			ev.target.name == 'store_id' ? this.setState({ store_id: ev.target.value }) : null;
			ev.target.name == 'login' ? this.setState({ login: ev.target.value }) : null;
			ev.target.name == 'password' ? this.setState({ password: ev.target.value }) : null;
		};

		this.validarUsuario = this.validarUsuario.bind(this);
	}

	validarUsuario() {
		var error = false;

		this.state.store_id == ''
			? (NotificationManager.warning('O campo Estabelecimento deve ser preenchido!', 'Aviso'), (error = true))
			: null;

		this.state.login == ''
			? (NotificationManager.warning('O campo Usuário deve ser preenchido!', 'Aviso'), (error = true))
			: null;

		this.state.password == ''
			? (NotificationManager.warning('O campo Senha deve ser preenchido!', 'Aviso'), (error = true))
			: null;

		!error ? this.verificarUsuario() : null;
	}

	verificarUsuario() {
		axios
			.post('http://codeplus.desenv:80/', {
				user: this.state.login,
				store_id: this.state.store_id,
				password: this.state.password,
				token: this.state.token
			})
			.then((response) => {
				response.data == 'error'
					? NotificationManager.error('Usuário não cadastrado!', 'Erro')
					: window.location.reload();
			})
			.catch((error) => {
				NotificationManager.error('Erro inesperado - ' + error + ' Contate suporte!', 'Erro');
			});
	}

	render() {
		return (
			<div class="loginBox bg-white text-center">
				<div class="codePlusLogo text-center d-inline-block justify-content-center">
					<img class="text-center" src={this.props.img} />
					<ion-icon class="dropIcon" name="arrow-dropdown" />
				</div>

				<form class="d-inline-block formLogin" method="POST">
					<input type="hidden" name="_token" value={this.props.token} />
					<div class="groupInput">
						<div class="iconLogin">
							<ion-icon name="apps" />
						</div>
						<input
							type="number"
							name="store_id"
							value={this.state.store_id}
							onChange={this.onChange}
							placeholder="Código do Estabelecimento"
						/>
					</div>
					<div class="groupInput">
						<div class="iconLogin">
							<ion-icon name="person" />
						</div>
						<input
							type="text"
							name="login"
							value={this.state.login}
							onChange={this.onChange}
							placeholder="Usuário"
						/>
					</div>
					<div class="groupInput">
						<div class="iconLogin">
							<ion-icon name="key" />
						</div>
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.onChange}
							placeholder="Senha"
						/>
					</div>
				</form>

				<div class="buttons">
					<button class="btnLogin" onClick={this.validarUsuario}>
						Login
					</button>
				</div>

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