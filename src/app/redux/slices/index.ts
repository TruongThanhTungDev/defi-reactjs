import { combineReducers } from 'redux';
import authReducer from './authSlice';

export * from './authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
