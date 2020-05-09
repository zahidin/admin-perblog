import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk';

export const initStore = (initialState = {}) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));
};
