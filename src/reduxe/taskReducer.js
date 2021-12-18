let initialState = {
    task_1: 0,
    task_2: 0,
    task_3: 0,
    task_4: 0,
    task_5: 0,
    task_6: 0,
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TASK_ID': {
            debugger
            return {
                ...state,
                [action.payload]: ++state[action.payload]
            }
        }
        default:
            return state
    }
}