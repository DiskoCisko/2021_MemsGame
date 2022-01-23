import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import './images.css';

const Task3 = ({ task }) => {
  const [isShowAns, setIsShowAns] = useState(false);
  const img = task.img.map((item) => {
    return (
      <img
        className="images__img"
        alt="img is loading..."
        key={item}
        src={item}
      />
    );
  });
  const ans = task.ans.map((item) => {
    return <li key={item}>{item}</li>;
  });
  return (
    <div>
      {task.text && <p>{task.text}</p>}
      <div className="wrap__img">{img}</div>
      <button
        type="button"
        className="modal__btn"
        onClick={() => {
          setIsShowAns(true);
        }}
      >
        Ответы
      </button>
      {isShowAns && <ol>{ans}</ol>}
    </div>
  );
};

Task3.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task3;
