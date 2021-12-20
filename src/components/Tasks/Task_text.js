import React from 'react';

const Task_text = ({task}) => {

    return <div>
        {task.img&&<img src={task.img}/>}
        <p>
            {task.task}
        </p>
    </div>
}
export default Task_text;