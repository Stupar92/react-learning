import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
    
    // Go up the parents tree and find router property (our react router from index.js)
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        /*These are not props from our component but props from the form*/
        this.props.createPost(props)
            .then(() => {
                //blog post has been created, navigate the user to index
                this.context.router.push('/');
            });
    }

    render() {
        //we have method handleSubmit from redux form.
        //same as: const handleSubmit = this.props.handleSubmit;
        const { fields: { title, categories, content }, handleSubmit} = this.props;
        return (
            <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) }>
                <h3>Create a New Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error : ""}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                     <div className="text-help">
                        {categories.touched ? categories.error : ""}
                    </div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                     <div className="text-help">
                        {content.touched ? content.error : ""}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a title';
    }
    if (!values.categories) {
        errors.categories = 'Enter categories';
    }
    if (!values.content) {
        errors.content = 'Enter some content';
    }

    return errors;
}

// connect first argument is mapStateToProps second is mapDispatchToProps
// reduxForm first is form config, second is mapStateToProps, third is mapDispatchToProps

export default reduxForm({
    form: 'PostsNewForm',
    fields: [
        'title', 'categories', 'content'
    ],
    validate
}, null /*mapStateToProps*/, {createPost} /*mapDispatchToProps */)(PostsNew);