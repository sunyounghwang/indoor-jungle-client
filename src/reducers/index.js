import { combineReducers } from 'redux';
import plantReducer from './plants';

export default combineReducers({
  plants: plantReducer
});
