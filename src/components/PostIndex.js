import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';
class PostIndex extends Component {
	componentDidMount() {
		this.props.fetchPost();
	}
	renderPost = () => {
		return _.map(this.props.fetchedPosts, (post) => {
			return (
				<li key={post.id} className="list-group-item">
					<Link className="text-dark" to={`/posts/${post.id}`}>
						{post.title} 
					</Link>
				</li>
			);
		});
	};
	render() {
		return (
			<div className="container w-50 mt-3">
				<h3 className="text-center">Posts</h3>
				<ul className="list-group ">{this.renderPost()}</ul>
				<Link className="btn btn-outline-success mt-3" to="/posts/new">
					Add New Post
				</Link>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		fetchedPosts: state.fetchedPosts
	};
};

export default connect(mapStateToProps, { fetchPost })(PostIndex);
