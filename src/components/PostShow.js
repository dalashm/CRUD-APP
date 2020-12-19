import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost,deletePost } from '../actions';
import { Link } from 'react-router-dom';
class PostShow extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchSinglePost(id);
	}
onDelete=()=>{
	const { id } = this.props.match.params;
this.props.deletePost(id,()=>{
	this.props.history.push("/")
})

}
	render() {
		console.log(this.props);
		const { post } = this.props;
		if (!post) {
			return <div>Loading.....</div>;
		}

		return (
			<div className="container mt-4">
               <div className="mb-4">
			   <h3>{post.title}</h3>
				<h4> {post.categories} </h4>
				<h5> {post.content} </h5>
			   </div>
				<Link to="/" className="btn btn-outline-light mr-2">Back To All Index</Link>
					<button className="btn btn-outline-danger" onClick={this.onDelete} >Delete Post</button>
			</div>
		);
	}
}
const mapStateToProps = ({ fetchedPosts }, ownProps) => {
	return { post: fetchedPosts[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchSinglePost,deletePost })(PostShow);
