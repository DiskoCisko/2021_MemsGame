export const CHANGE_TASK_ID = "CHANGE_TASK_ID";
export const REST_ID = "REST_ID";

export const changeId = (taskName) => {
    return {
        type: CHANGE_TASK_ID,
        payload: taskName
    }
}

export const restId = (taskName) => {
    return {
        type: REST_ID,
        payload: taskName
    }
}