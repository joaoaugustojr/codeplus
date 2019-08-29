import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from '../TableView/Table';
import Modal from '../ModalPanel/Modal';
import Misc from '../../services/Misc';
import Crud from '../../services/Crud';

//************************************************ */
import { Provider } from 'react-redux';
import store from '../../services/Store';
import { bindActionCreators } from 'redux';
import * as actionsCrud from '../../actions/actCrud';
import { connect } from 'react-redux';

class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			search: '',
			name: ''
		};

		this.pesquisar = this.pesquisar.bind(this);
		this.upppercase = this.upppercase.bind(this);
	}

	async componentDidMount() {
		this.setState({ data: await Crud.list('http://codeplus.desenv:80/dashboard/usuarios/show') });
		this.props.addItemAction(this.state.data);
	}

	pesquisar(ev) {
		this.setState({ search: ev.target.value });
	}

	upppercase(ev) {
		this.setState({ name: Misc.uppercaseValue(ev.target.value) });
	}

	render() {
		const head = { id: 'Id', name: 'Nome', login: 'Login', status: 'Status' };

		return (
			<Provider store={store}>
				<div>
					<section class="headerTable">
						<button type="button" data-toggle="modal" data-target="#addUser">
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
					<Modal
						title="Adicionar Usuário"
						size="" /*modal-sm lg xl*/
						idModal="addUser"
						actionText="Adicionar"
						cancelText="Cancelar"
						idForm="addUserForm"
						function="add"
						url="http://codeplus.desenv:80/dashboard/usuarios/"
					>
						<form class="d-inline-bloc basicInput" id="addUserForm" method="POST">
							<input type="hidden" name="_token" value={this.props.token} />
							<div class="groupInput">
								<input
									class="form-control input-dash-text"
									type="text"
									name="name"
									value={this.state.name}
									placeholder="Nome Completo do Usuário"
									onChange={this.upppercase}
								/>
							</div>
							<div class="groupInput">
								<input
									class="form-control input-dash-text"
									type="text"
									name="login"
									placeholder="Login"
								/>
							</div>
							<div class="groupInput">
								<input
									class="form-control input-dash-text"
									type="password"
									name="password"
									placeholder="Senha"
								/>
							</div>
							<div class="groupInput selectElement">
								<select class="form-control inputSelect" name="select">
									<option value="A">Ativo</option>
									<option value="I">Inativo</option>
								</select>
							</div>
						</form>
					</Modal>
				</div>
			</Provider>
		);
	}
}

const mapStateToProps = (state) => ({
	element: state.element
});
const mapDispatchToProps = (dispatch) => bindActionCreators(actionsCrud, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);

if (document.getElementById('users')) {
	var token = document.getElementById('users').getAttribute('token');
	ReactDOM.render(<Users token={token} />, document.getElementById('users'));
}
