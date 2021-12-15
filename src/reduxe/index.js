import { combineReducers, createStore } from 'redux';
import {taskReducer} from './taskReducer';
import { compose } from 'redux';

export const reducers = combineReducers({
    tasksId: taskReducer,
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(reducers, composeEnhancers)