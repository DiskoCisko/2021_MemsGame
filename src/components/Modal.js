import React from 'react';

const Modal = ({showModal, cards, changeId}) => {
    const hideModal = () => {
        showModal(false)
        changeId()
    }
    return <div>
        <h1>Hi</h1>
        {cards}
        <button onClick={() => {
            hideModal()
        }}>
            X
        </button>
    </div>
}

export default Modal;