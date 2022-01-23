import React from 'react';
import { PropTypes } from 'prop-types';
import Images from './Tasks/Images';
import Video from './Tasks/Video';
import Quize from './Tasks/Quize';
import TaskText from './Tasks/Task_text';
import Question from './Tasks/Question';

import './modal.css';

import { video, singleQuize, images, quize } from '../data/task_type';

const Modal = ({ showModal, changeId, task, taskName, id, maxId, restId }) => {
  const hideModal = () => {
    showModal(false);
    if (id === maxId) {
      restId(taskName);
    } else changeId(taskName);
  };
  const modalType = () => {
    switch (task.type) {
      case video: {
        return <Video task={task} />;
      }
      case images: {
        return <Images task={task} />;
      }
      case quize: {
        return <Quize task={task} />;
      }
      case singleQuize: {
        return (
          <Question
            title={task.title}
            text={task.text}
            ans={task.ans}
            author={task.author}
          />
        );
      }
      default:
        return <TaskText task={task} />;
    }
  };
  return (
    <div className="modal">
      <div className="modal__shadow" />
      <div className="modal__wrap">
        <div className="modal__window">
          <button
            type="button"
            className="modal__btn"
            onClick={() => {
              hideModal();
            }}
          >
            X
          </button>
          {modalType()}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  showModal: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  changeId: PropTypes.func.isRequired,
  taskName: PropTypes.string.isRequired,
  restId: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  maxId: PropTypes.number.isRequired,
};

export default Modal;
