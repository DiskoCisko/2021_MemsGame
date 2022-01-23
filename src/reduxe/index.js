import { combineReducers, createStore, compose } from 'redux';
import taskReducer from './taskReducer';

export const reducers = combineReducers({
  tasksId: taskReducer,
});

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(reducers, composeEnhancers);
