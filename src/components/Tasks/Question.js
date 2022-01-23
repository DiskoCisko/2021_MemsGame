import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const Question = ({ title, text, ans, author }) => {
  const [isShowAns, setIsShowAns] = useState(false);
  const question = text.map((item) => {
    return <li key={item}>{item}</li>;
  });
  return (
    <div>
      {title}
      <ul>{question}</ul>
      <div>
        <p>
          <i>{author}</i>
        </p>
      </div>
      <button
        type="button"
        className="modal__btn"
        onClick={() => {
          setIsShowAns(true);
        }}
      >
        Ответ
      </button>
      {isShowAns && <p>{ans}</p>}
    </div>
  );
};

Question.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired,
  ans: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Question;
