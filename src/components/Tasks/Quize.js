import React from 'react';
import { PropTypes } from 'prop-types';
import Question from './Question';

import './quize.css';

const Task6 = ({ task }) => {
  const questions = task.qs.map((item) => {
    return (
      <Question
        key={item.title}
        title={item.title}
        text={item.text}
        ans={item.ans}
      />
    );
  });
  return (
    <div className="quize">
      <img className="quize__img" alt="loading..." src={task.img} />
      <p>{task.text}</p>
      <div>{questions}</div>
    </div>
  );
};

Task6.propTypes = {
  task: PropTypes.object.isRequired,
};
export default Task6;
