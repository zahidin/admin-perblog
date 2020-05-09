import { combineReducers } from 'redux';
import postReducer from './post/reducer';

const rootReducer = combineReducers({
  post: postReducer,
});

export type AppStore = ReturnType<typeof rootReducer>;
export default rootReducer;
