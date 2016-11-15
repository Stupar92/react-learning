import { combineReducers } from 'redux';
import BookReduces from './reducerBooks';

const rootReducer = combineReducers({
  books: BookReduces
});

export default rootReducer;
