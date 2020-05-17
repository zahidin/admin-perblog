import { combineReducers } from 'redux';
import postReducer from './post/reducer';
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
  post: postReducer,
  auth: authReducer,
});

export type AppStore = ReturnType<typeof rootReducer>;
export default rootReducer;
