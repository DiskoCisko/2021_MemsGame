import React from 'react';
import { PropTypes } from 'prop-types';

const Task5 = ({ task }) => {
  return <div className="video">{task.task}</div>;
};

Task5.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task5;
