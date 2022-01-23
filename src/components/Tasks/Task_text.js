import React from 'react';
import { PropTypes } from 'prop-types';

import './task_text.css';

const TaskTtext = ({ task }) => {
  return (
    <div className="text">
      <h3>{task.title}</h3>
      {task.img && (
        <img className="text__img" alt="loading..." src={task.img} />
      )}
      <p>{task.text}</p>
    </div>
  );
};

TaskTtext.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskTtext;
