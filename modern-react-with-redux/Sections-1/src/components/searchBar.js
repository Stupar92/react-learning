import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    value = {this.state.term}
                    onChange = {(event) => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({
            term:term
        });

        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;

// @NOTE
/**
 * Usage like this:
 * 
 * const SearchBar = () => {
 *   return <input />;
 *  };
 * 
 * Is only ok when we don't want internal state of the component to be remembered,
 *  just the view.
 * 
 */