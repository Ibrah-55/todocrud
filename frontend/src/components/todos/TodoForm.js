import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class TodoForm extends Component {
	// ...

	render() {
		const btnText = `${this.props.initialValues ? 'Update' : 'Add'}`; // added
		return (
			<div className="ui segment">
				<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
					<Field name="task" component={this.renderField} label="Task" />
					<button className="ui primary button">{btnText}</button> // updated
				</form>
			</div>
		);
	}
}
