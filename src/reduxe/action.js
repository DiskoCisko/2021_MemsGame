const CHANGE_TASK_ID = "CHANGE_TASK_ID";

export const changeId = (taskName) => {
    return {
        type: CHANGE_TASK_ID,
        payload: taskName
    }
}