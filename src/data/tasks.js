
import task_1 from './task_1';
import task_2 from './task_2';
import task_3 from './task_3';
import task_4 from './task_4';
import task_5 from './task_5';
import task_6 from './task_6';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 0));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

const newTask_1 = shuffleArray(task_1);
const newTask_2 = shuffleArray(task_2);
const newTask_3 = shuffleArray(task_3);
const newTask_4 = shuffleArray(task_4);
const newTask_5 = shuffleArray(task_5);
const newTask_6 = shuffleArray(task_6);

export const tasks = {
    task_1: newTask_1,
    task_2: newTask_2,
    task_3: newTask_3,
    task_4: newTask_4,
    task_5: newTask_5,
    task_6: newTask_6
}
