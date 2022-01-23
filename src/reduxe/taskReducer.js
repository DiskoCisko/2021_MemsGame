import { CHANGE_TASK_ID, REST_ID } from './action';

const initialState = {
  task_1: 0,
  task_2: 0,
  task_3: 0,
  task_4: 0,
  task_5: 0,
  task_6: 0,
};

const taskReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_TASK_ID: {
      return {
        ...state,
        [action.payload]: state[action.payload] + 1,
      };
    }
    case REST_ID: {
      return {
        ...state,
        [action.payload]: 0,
      };
    }
    default:
      return state;
  }
};

export default taskReducer;
