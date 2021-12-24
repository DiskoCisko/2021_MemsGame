import React, {useState} from 'react';
import Modal from './Modal';
import './card.css';

const Card = ({title, task, changeId, taskName, restId, id, maxId}) => {
    
    const [isShowModal, setIsShowModal] = useState(false);

    const showModal = (bool) => {
        setIsShowModal(bool)
    }

    return <div className='card__wrap'>
        <button className='card' onClick={() => {
            showModal(true)
        }}>
            {title}
        </button>
        {isShowModal&&<Modal
            showModal = {showModal}
            changeId = {changeId}
            restId = {restId}
            task = {task}
            taskName = {taskName}
            id = {id}
            maxId={maxId}
        />}
    </div>
}

export default Card;