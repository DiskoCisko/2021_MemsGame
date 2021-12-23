import React, {useState} from 'react';
import './images.css';

const Task_3 = ({task}) => {
    const [isShowAns, setIsShowAns] = useState(false);
    const img = task.img.map((item, index) => {
        return <img className='images__img' key={index} src={item}/>
    })
    const ans = task.ans.map((item, index) => {
        return <li key={index}>{item}</li>
    })
    return <div>
        {task.task&&<p>
            {task.task}
        </p>}
        <div>
            {img} 
        </div>
        <button onClick={() => {
            setIsShowAns(true)
        }}>
            Ответы
        </button>
        {isShowAns&&<ol>
            {ans}
        </ol>}
    </div>
}
export default Task_3;