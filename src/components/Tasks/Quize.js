import React from 'react';
import Question from './Question';
import './quize.css';
const Task_6 = ({task}) => {
    const questions = task.qs.map((item, index) => {
        return <Question
            key={index}
            title = {item.title}
            text = {item.text}
            ans = {item.ans}
        />
    })
    return <div className='quize'>
        <img className='quize__img' src={task.img}/>
        <p>
            {task.task}
        </p>
        <div>
            {questions}
        </div>
    </div>
    
}
export default Task_6;