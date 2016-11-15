import React, {Component} from 'react';
import  { connect } from 'react-redux';

class BookList extends Component {
    
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // maps application-level state to this component's props
    return {
        books: state.books
    };
}

// connect takes a function and a component and returns a container
export default connect(mapStateToProps)(BookList);