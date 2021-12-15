import React, {useState, useEffect} from 'react';
import Modal from './Modal';


const array = [1,2,3,4,5,6,78,9]


const Card = ({title}) => {
    console.log()
    const [isShowModal, setIsShowModal] = useState(false);
    const [id, setId] = useState(0);

    const showModal = (bool) => {
        setIsShowModal(bool)
    }
    const changeId = () => {
        setId(id++)
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
        />}
    </div>
}

export default Card;