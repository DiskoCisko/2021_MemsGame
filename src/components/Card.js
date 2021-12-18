import React, {useState, useEffect} from 'react';
import Modal from './Modal';


const Card = ({title, task, changeId, taskName}) => {
    
    const [isShowModal, setIsShowModal] = useState(false);

    const showModal = (bool) => {
        setIsShowModal(bool)
    }

    return <div>
        <button onClick={() => {
            showModal(true)
        }}>
            {title}
        </button>
        {isShowModal&&<Modal
            showModal = {showModal}
            changeId = {changeId}
            task = {task}
            taskName = {taskName}
        />}
    </div>
}

export default Card;