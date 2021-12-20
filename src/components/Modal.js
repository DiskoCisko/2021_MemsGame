import React from 'react';
import Images from './Tasks/Images';
import Video from './Tasks/Video';
import Victorina from './Tasks/Victorina';
import Task_text from './Tasks/Task_text';
import Question from './Tasks/Question';

import { video, singleQuize, images, quize } from '../data/task_type';
const Modal = ({showModal, changeId, task, taskName, id, maxId, restId}) => {
    const hideModal = () => {
        showModal(false)
        if (id === maxId) {
            restId(taskName)
        } else changeId(taskName)
    }
    const modalType = () => {
        switch (task.type) {
        case video: {
            return <Video 
                task = {task}
            />
        }
        case images: {
            return <Images 
                task = {task}
            />
        }
        case quize: {
            return <Victorina 
                task = {task}
            />
        }
        case singleQuize: {
            return <Question 
                title = {task.title}
                text = {task.text}
                ans = {task.ans}
            />
        }
        default: 
            return <Task_text 
                    task = {task}
                />
    }
}
    return <div>
        <h1>Hi</h1>
        {modalType()}
        <button onClick={() => {
            hideModal()
        }}>
            X
        </button>
    </div>
}

export default Modal;