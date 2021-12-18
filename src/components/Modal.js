import React from 'react';
import Task_3 from './Tasks/Task_3';
import Task_5 from './Tasks/Task_5';
import Task_6 from './Tasks/Task_6';
import Task_text from './Tasks/Task_text';
const Modal = ({showModal, changeId, task, taskName, id, maxId, restId}) => {
    const hideModal = () => {
        showModal(false)
        if (id === maxId) {
            restId(taskName)
        } else changeId(taskName)
    }
    const modalType = () => {
        switch (taskName) {
        case "task_3": {
            return <Task_3 
                task = {task}
            />
        }
        case "task_5": {
            return <Task_5 
                task = {task}
            />
        }
        case "task_6": {
            return <Task_6 
                task = {task}
            />
        }
        default: 
        debugger
            return <Task_text 
                    task = {task}
                />
    }
}
    return <div>
        <h1>Hi</h1>
        {modalType()}
        <button onClick={() => {
            hideModal()
        }}>
            X
        </button>
    </div>
}

export default Modal;