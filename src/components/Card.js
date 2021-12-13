import React, {useState, useEffect} from 'react';
import Modal from './Modal';

const array = [1,2,3,4,5,6,78,9]

const Card = ({title, shuffleArray}) => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [cards, setCards] = useState([]);
    const showModal = (bool) => {
        setIsShowModal(bool)
    }
    useEffect(()=> {
        setCards(shuffleArray(array))
    }, [])
    return <div>
        <button onClick={() => {
            showModal(true)
        }}>
            {title}
        </button>
        {isShowModal&&<Modal
            showModal = {showModal}
            cards = {cards}
        />}
    </div>
}

export default Card;