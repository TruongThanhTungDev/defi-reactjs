import { combineReducers } from 'redux';
import counter from './counterSlice';

export * from './counterSlice';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
