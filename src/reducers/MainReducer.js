import { combineReducers } from 'redux';
import blogState from './BlogReducer';
import menuState from './MenuReducer';

const mainReducer = combineReducers({
  blog: blogState,
  menu: menuState,
});

export default mainReducer;
