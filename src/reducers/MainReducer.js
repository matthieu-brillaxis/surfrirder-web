import { combineReducers } from 'redux';
import blogState from './BlogReducer';

const mainReducer = combineReducers({
  blog: blogState,
});

export default mainReducer;
