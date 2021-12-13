import React from 'react';

const Modal = ({showModal, cards}) => {
    return <div>
        <h1>Hi</h1>
        {cards}
        <button onClick={() => {
            showModal(false)
        }}>
            X
        </button>
    </div>
}

export default Modal;