import React, { Component } from 'react';
import Crud from '../../services/Crud';
import { NotificationManager } from 'react-notifications';

export default class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.add = this.add.bind(this); //add model
	}

	async add() {
		var response = await Crud.add(this.props.url, this.props.idForm);

		if (response == 'ok') {
			NotificationManager.success('Dados salvos com sucesso!', 'Aviso!');
			$('.modal').modal('toggle');
			$('.modal-backdrop').remove();
		} else {
			NotificationManager.error(response['erro'] + ' Contate suporte!', 'Erro');
		}
	}

	render() {
		return (
			<div>
				<div
					class="modal fade"
					id={this.props.idModal}
					tabindex="-1"
					role="dialog"
					aria-labelledby={'modalLabel'}
					aria-hidden="true"
				>
					<div className={this.props.size + ' modal-dialog modal-dialog-centered'} role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="modalLabel">
									{this.props.title}
								</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">{this.props.children}</div>
							<div class="modal-footer">
								{this.props.function == 'add' && (
									<button type="button" class="btn btn-primary" onClick={this.add}>
										{this.props.actionText || 'Salvar'}
									</button>
								)}

								<button type="button" class="btn btn-secondary" data-dismiss="modal">
									{this.props.cancelText || 'Sair'}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
