import React from 'react';
import { connect } from 'react-redux';
import {changeId, restId} from './../../reduxe/action';
import Card from '../Card.js';
import Dice from '../Dice';
import {tasks} from '../../data/tasks';

import './cards.css';

const TASKNAME = 
    [
        "task_1",
        "task_2",
        "task_3",
        "task_4",
        "task_5",
        "task_6",
    ]

const MainContainer = ({tasksId, changeId, restId}) => {
    const card = TASKNAME.map((item, index)=> {
        return <Card 
            title={index + 1}
            taskName = {item} 
            changeId = {changeId}
            restId = {restId}
            id = {tasksId[item]}
            maxId = {tasks[item].length - 1}
            task = {tasks[item][tasksId[item]]}
            key={index}
            />
    })
    return <div>
    <h1 className='title'>2021</h1>
        <div className='cards'>
                {card}
        </div>
        <Dice/>
    </div>
}

const mapStateToProps = (state) => {
    return {
        tasksId: state.tasksId,
    }
}

export default connect(mapStateToProps, {changeId, restId})(MainContainer);