import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Modal from './Modal';
import './card.css';

const Card = ({ title, task, changeId, taskName, restId, id, maxId }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = (bool) => {
    setIsShowModal(bool);
  };

  return (
    <div className="card__wrap">
      <button
        type="button"
        className="card"
        onClick={() => {
          showModal(true);
        }}
      >
        {title}
      </button>
      {isShowModal && (
        <Modal
          showModal={showModal}
          changeId={changeId}
          restId={restId}
          task={task}
          taskName={taskName}
          id={id}
          maxId={maxId}
        />
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  task: PropTypes.object.isRequired,
  changeId: PropTypes.func.isRequired,
  taskName: PropTypes.string.isRequired,
  restId: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  maxId: PropTypes.number.isRequired,
};

export default Card;
