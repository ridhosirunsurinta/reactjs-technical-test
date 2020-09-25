import { combineReducers } from 'redux';
import githubReducer from './github/github.reducer';

export default combineReducers({
  github: githubReducer
});