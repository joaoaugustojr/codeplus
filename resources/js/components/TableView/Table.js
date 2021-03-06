import React, { Component } from 'react';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keys: [],
			data: []
		};

		this.filterData = this.filterData.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.data != this.props.data) {
			this.setState({ data: nextProps.data });
			this.setState({ keys: Object.keys(nextProps.data[0]) });
		}
		this.filterData(nextProps.search);
	}

	filterData(query) {
		var result = this.props.data;

		if (query.length > 0) {
			result = result.filter(function(res) {
				var text = JSON.stringify(res);
				return text.toUpperCase().includes(query.toUpperCase());
			});
			this.setState({ data: result });
		} else {
			if (this.props.data.length > 0) {
				this.setState({ data: this.props.data });
			}
		}
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
							{this.state.keys.length > 1 && (this.props.action && <th scope="col">Ação</th>)}
						</tr>
					</thead>
					<tbody>
						{this.state.data.map((value) => (
							<tr key={value.id}>
								{Object.keys(value).map((item) => <td key={item}>{value[item]}</td>)}

								{this.props.action && (
									<td>
										<ul class="btnActions">
											{this.props.view && (
												<li>
													<ion-icon class="btnView" name="eye" />
												</li>
											)}
											{this.props.edit && (
												<li>
													<ion-icon class="btnEdit" name="create" />
												</li>
											)}
											{this.props.delete && (
												<li>
													<ion-icon class="btnRemove" name="trash" />
												</li>
											)}
										</ul>
									</td>
								)}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
