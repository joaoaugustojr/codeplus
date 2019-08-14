import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from '../TableView/Table';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';

export default class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	componentDidMount() {
		axios
			.get('http://codeplus.desenv:80/dashboard/usuarios/show')
			.then((response) => {
				this.setState({ data: response.data });
			})
			.catch((error) => {
				NotificationManager.error('Erro inesperado - ' + error + ' Contate suporte!', 'Erro');
			});
	}

	render() {
		const head = { id: 'Id', name: 'Nome', login: 'Login', status: 'Status' };

		return (
			<div>
				<section class="headerTable">
					<button type="button" class="">
						Adicionar
					</button>
					<div class="input-group mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="basic-addon1">
								<ion-icon name="search" />
							</span>
						</div>
						<input
							type="text"
							class="form-control"
							placeholder="Pesquisar Usuários"
							aria-label="Username"
							aria-describedby="basic-addon1"
						/>
					</div>
				</section>
				<Table data={this.state.data} head={head} action={true} edit={true} view={true} delete={true} />
			</div>
		);
	}
}

if (document.getElementById('users')) {
	ReactDOM.render(<Users />, document.getElementById('users'));
}
