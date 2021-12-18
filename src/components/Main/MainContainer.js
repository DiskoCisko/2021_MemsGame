import React from 'react';
import { connect } from 'react-redux';
import {changeId} from './../../reduxe/action';
import Card from '../Card.js';

import {task_1} from '../../data/tasks';
// const TASKNAME = 
//     {
//         task_1: "task_1",
//         task_2: "task_2",
//         task_3: "task_3",
//         task_4: "task_4",
//         task_5: "task_5",
//         task_6: "task_6",
//     }
const TASKNAME = 
    [
        "task_1",
        "task_2",
        "task_3",
        "task_4",
        "task_5",
        "task_6",
    ]

const MainContainer = ({tasksId, changeId}) => {
    const card = TASKNAME.map((item, index)=> {
        return <Card 
            title={index + 1}
            taskName = {item} 
            changeId = {changeId}
            task = {task_1[tasksId[item]]}
            key={index}
            />
    })
    return <div>
                {card}
        </div>
}

const mapStateToProps = (state) => {
    debugger
    return {
        tasksId: state.tasksId,
    }
}

export default connect(mapStateToProps, {changeId})(MainContainer);