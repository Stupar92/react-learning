import React, {Component} from 'react';

// The thing that will convert our component to container
import  { connect } from 'react-redux';

// Our action creator
import { selectBook } from '../actions/index';

// We need to make sure that action flows through all the reducers in our application
import { bindActionCreators } from 'redux';

class BookList extends Component {
    
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title}
                    className="list-group-item"
                    onClick={() => this.props.selectBook(book)}>
                    {book.title}  
                </li>
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

// Anything returned from this function will end up as props on the BookList container
// That means that we can call this.props.selectBook in the BookList container :)
function mapDispatchToProps(dispatch) {

    // Whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// connect takes a function and a component and returns a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);