import { combineReducers } from 'redux';
import projects from './projects';
import benchmark from './benchmark';
import personalInfo from './personalInfo';

const rootReducer = combineReducers({
  projects,
  benchmark,
  personalInfo
});

export default rootReducer;
