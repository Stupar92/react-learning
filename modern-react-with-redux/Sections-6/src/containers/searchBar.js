import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    onInputChange(event) {
        this.setState({term: event.target.value})
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form
                className="input-group"
                onSubmit={(event) => this.onFormSubmit(event)} >
                
                <input
                    placeholder="Get a five-day forecast"
                    className="form-control"
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event)}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}