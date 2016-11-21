import { combineReducers } from 'redux';
import BookReducer from './reducerBooks';
import ActiveBookReducer from './reducerActiveBook';

const rootReducer = combineReducers({
  books: BookReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
