import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

     componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
            .then(() => {
                 this.context.router.push('/');
            });
    }

    render() {
        if (!this.props.post) {
            return <div>Loading...</div>
        }
        const post = this.props.post;

        //we can get id param from url by: console.log(this.props.params.id);
        return (
            <div>
                <Link to="/">Back to index</Link>
                <button className="btn btn-danger"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);