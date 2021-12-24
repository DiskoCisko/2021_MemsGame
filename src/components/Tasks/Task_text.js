import React from 'react';
import './task_text.css';

const Task_text = ({task}) => {

    return <div className='text'>
        {task.img&&<img className='text__img' src={task.img}/>}
        <p>
            {task.task}
        </p>
    </div>
}
export default Task_text;