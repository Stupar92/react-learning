import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {

    handleFormSubmit({email, password}) {
        console.log(email, password);
    }

    render() {
        // these come from redux-form
        const { handleSubmit, fields: {email, password}} = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input {...email} className="form-control" />
                </fieldset>
                
                <fieldset className="form-group">
                    <label>Password:</label>
                    <input {...password} className="form-control" />
                </fieldset>

                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

// MUST USE 4.2.2 On latest fields is deprecated
export default reduxForm({
    form: 'signinForm',
    fields: [
        'email',
        'password'
    ]
})(Signin);