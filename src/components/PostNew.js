import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost } from '../actions';
class PostNew extends Component {
	renderField(field) {
		// const className = `form-group ${field.meta.touched && field.meta.error}? has-danger: ""`;
		const className2 = `form-control ${field.meta.touched && field.meta.error ? 'is-invalid ' : ' '}`;
		const s = 1;
		return (
			<div className="form-group">
				<label> {field.label} </label>
				<input
					type="text"
					{...field.input}
					className={className2}
					autoComplete="off"
				/>
				<div className="invalid-feedback">{field.meta.touched && field.meta.error ? field.meta.error : ''}</div>
			</div>
		);
	}
	render() {
		const onSubmit = (values) => {
			this.props.addPost(values, () => {
				this.props.history.push('/');
			});
		};
		const { handleSubmit } = this.props;
		return (
			<div className="mt-3 container">
				<form className="w-50" onSubmit={handleSubmit(onSubmit)}>
					<Field label="Title" name="title" component={this.renderField} />
					<Field label="Categories" name="categories" component={this.renderField} />
					<Field label="Content" name="content" component={this.renderField} />
					<button className="btn btn-outline-light" type="submit">
						Add Post
					</button>
					<Link to="/" className="btn btn-outline-danger ml-3">
						Back To All Post
					</Link>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};
	// Validate the inputs from values

	if (!values.title) {
		errors.title = 'Enter a title';
	}

	if (values.title && values.title.length < 3) {
		errors.title = 'Title must be 3 characters';
	}
	if (!values.categories) {
		errors.categories = 'Enter a categories';
	}

	if (!values.content) {
		errors.content = 'Enter a content';
	}

	// If Errors is empty its oki the form is fine to submit
	// if Errors has any properties , redux form assumes form is invalid
	return errors;
}

export default reduxForm({
	validate,
	form: 'postsNewForm'
})(connect(null, { addPost })(PostNew));
