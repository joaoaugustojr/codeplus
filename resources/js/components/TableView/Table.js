import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keys: [],
			data: []
		};
	}

	componentDidMount() {
		this.setState({ keys: Object.keys(this.props.data[0]) });
		this.setState({ data: this.props.data });
	}

	render() {
		return (
			<div>
				<table class="table table-striped table-borderless table-hover table-sm">
					<thead>
						<tr>
							{this.state.keys.map((key) => (
								<th key={key} scope="col">
									{this.props.head[key] || key}
								</th>
							))}
							{this.props.action ? <th scope="col">Ação</th> : null}
						</tr>
					</thead>
					<tbody>
						{this.state.data.map((value) => (
							<tr key={value.id}>
								{Object.keys(value).map((item) => <td key={item}>{value[item]}</td>)}

								{this.props.action ? (
									<td>
										<ul class="btnActions">
											{this.props.view ? (
												<li>
													<ion-icon class="btnView" name="eye" />{' '}
												</li>
											) : null}
											{this.props.edit ? (
												<li>
													<ion-icon class="btnEdit" name="create" />
												</li>
											) : null}
											{this.props.delete ? (
												<li>
													<ion-icon class="btnRemove" name="trash" />
												</li>
											) : null}
										</ul>
									</td>
								) : null}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
