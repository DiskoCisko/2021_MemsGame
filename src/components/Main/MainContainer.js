import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { changeId, restId } from '../../reduxe/action';
import Card from '../Card';
import Dice from '../Dice';
import { tasks, inintialMessage } from '../../data/tasks';
import Modal from '../Modal';

import './cards.css';

const TASKNAME = ['task_1', 'task_2', 'task_3', 'task_4', 'task_5', 'task_6'];

const MainContainer = ({ tasksId, chId, rstId }) => {
  const [isModalShow, setIsShowModal] = useState(true);
  const showModal = (bool) => {
    setIsShowModal(bool);
  };
  const card = TASKNAME.map((item, index) => {
    return (
      <Card
        title={index + 1}
        taskName={item}
        changeId={chId}
        restId={rstId}
        id={tasksId[item]}
        maxId={tasks[item].length - 1}
        task={tasks[item][tasksId[item]]}
        key={tasksId[item]}
      />
    );
  });
  return (
    <div>
      <h1 className="title">2021</h1>
      <div className="cards">{card}</div>
      <Dice />
      {isModalShow && <Modal showModal={showModal} task={inintialMessage} />}
    </div>
  );
};
MainContainer.propTypes = {
  tasksId: PropTypes.number.isRequired,
  chId: PropTypes.func.isRequired,
  rstId: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
  return {
    tasksId: state.tasksId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chId: dispatch(changeId()),
    rstId: dispatch(restId()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
