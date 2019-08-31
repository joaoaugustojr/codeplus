import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';

export default (Login = (props) => {
	const [ store_id, setStoreId ] = useState('');
	const [ login, setLogin ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ token, setToken ] = useState(props.token);

	function onChange(ev) {
		ev.target.name == 'store_id' ? setStoreId(ev.target.value) : null;
		ev.target.name == 'login' ? setLogin(ev.target.value) : null;
		ev.target.name == 'password' ? setPassword(ev.target.value) : null;
	}

	function validarUsuario() {
		var error = false;

		store_id == ''
			? (NotificationManager.warning('O campo Estabelecimento deve ser preenchido!', 'Aviso'), (error = true))
			: null;

		login == ''
			? (NotificationManager.warning('O campo Usuário deve ser preenchido!', 'Aviso'), (error = true))
			: null;

		password == ''
			? (NotificationManager.warning('O campo Senha deve ser preenchido!', 'Aviso'), (error = true))
			: null;

		!error ? verificarUsuario() : null;
	}

	function verificarUsuario() {
		axios
			.post('http://codeplus.desenv:80/', {
				user: login,
				store_id: store_id,
				password: password,
				token: token
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

	return (
		<div class="loginBox bg-white text-center">
			<div class="codePlusLogo text-center d-inline-block justify-content-center">
				<img class="text-center" src={props.img} />
				<ion-icon class="dropIcon" name="arrow-dropdown" />
			</div>

			<form class="d-inline-block formLogin" method="POST">
				<input type="hidden" name="_token" value={props.token} />
				<div class="groupInput">
					<div class="iconLogin">
						<ion-icon name="apps" />
					</div>
					<input
						type="number"
						name="store_id"
						value={store_id}
						onChange={onChange}
						placeholder="Código do Estabelecimento"
					/>
				</div>
				<div class="groupInput">
					<div class="iconLogin">
						<ion-icon name="person" />
					</div>
					<input type="text" name="login" value={login} onChange={onChange} placeholder="Usuário" />
				</div>
				<div class="groupInput">
					<div class="iconLogin">
						<ion-icon name="key" />
					</div>
					<input type="password" name="password" value={password} onChange={onChange} placeholder="Senha" />
				</div>
			</form>

			<div class="buttons">
				<button class="btnLogin" onClick={validarUsuario}>
					Login
				</button>
			</div>

			<p class="text-capitalize textSuport">
				<small class="font-weight-light">{props.msg}</small>
			</p>
		</div>
	);
});

if (document.getElementById('login')) {
	var msg = document.getElementById('login').getAttribute('msgSuport');
	var token = document.getElementById('login').getAttribute('token');
	var img = document.getElementById('login').getAttribute('img');
	ReactDOM.render(<Login msg={msg} token={token} img={img} />, document.getElementById('login'));
}
