import { combineReducers } from 'redux';
import BookReducer from './reducerBooks';

const rootReducer = combineReducers({
  books: BookReducer
});

export default rootReducer;
