import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from '../TableView/Table';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';

export default class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			search: ''
		};

		this.pesquisar = this.pesquisar.bind(this);
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

	pesquisar(ev) {
		this.setState({ search: ev.target.value });
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
							<span class="input-group-text input-dash" id="basic-addon1">
								<ion-icon class="text-white" name="search" />
							</span>
						</div>
						<input
							type="text"
							class="form-control input-dash-text"
							placeholder="Pesquisar Usuários"
							aria-label="Username"
							aria-describedby="basic-addon1"
							value={this.state.value}
							onChange={this.pesquisar}
						/>
					</div>
				</section>
				<Table
					data={this.state.data}
					head={head}
					search={this.state.search}
					action={true}
					edit={true}
					view={true}
					delete={true}
				/>
			</div>
		);
	}
}

if (document.getElementById('users')) {
	ReactDOM.render(<Users />, document.getElementById('users'));
}
