import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="posts/new" className="btn btn-primary">
                        Add a post
                    </Link>
                </div>
                
                Lists of blog posts1
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPosts: fetchPosts}, dispatch);
}

export default connect(null /*mapStateToProps, in this case not needed*/, mapDispatchToProps)(PostsIndex);

/* alternative to this is:
 * export default connect(null, {fetchPosts})(PostsIndex);
 * 
 * This way we don't have to import bindActionCreators
 * 
 */