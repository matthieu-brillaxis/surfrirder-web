import { combineReducers } from 'redux';
import blogState from './BlogReducer';
import menuState from './MenuReducer';
import pageState from './PageReducer';

const mainReducer = combineReducers({
  blog: blogState,
  menu: menuState,
  page: pageState,
});

export default mainReducer;
