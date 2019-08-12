import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from '../TableView/Table';

export default class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const data = [
			{ id: 1, name: 'JOAO AUGUSTO DA SILVA JUNIOR', login: 'joaoaugusto', status: 'ATIVO' },
			{ id: 2, name: 'MIGUEL AUGUSTO MARTINS DA SILVA', login: 'miguelaugusto', status: 'ATIVO' },
			{ id: 3, name: 'ALBA ANTÔNIA DA COSTA', login: 'albaantonia', status: 'ATIVO' }
		];

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

				<Table data={data} head={head} action={true} edit={true} view={true} delete={true} />
			</div>
		);
	}
}

if (document.getElementById('users')) {
	ReactDOM.render(<Users />, document.getElementById('users'));
}
