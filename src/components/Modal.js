import React from 'react';

const Modal = ({showModal, cards, changeId, task, taskName, id, maxId, restId}) => {
    const hideModal = () => {
        showModal(false)
        debugger
        if (id === maxId) {
            restId(taskName)
        } else changeId(taskName)
    }
    return <div>
        <h1>Hi</h1>
        {cards}
        <button onClick={() => {
            hideModal()
        }}>
        <p>
            {task.task}
        </p>
            X
        </button>
    </div>
}

export default Modal;