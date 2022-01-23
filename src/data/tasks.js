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
  return array;
};

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
  task_6: newTask_6,
};

export const inintialMessage = {
  title: 'Привет, друг!',
  text: `
    Если ты видишь это сообщение, значит тебя таки заставили сыграть в эту игру, сочувствую, правда не искренне. Хорош ныть и давай пробежимся по правилам. Кидай кубик, если его нет, то там есть рандомайзер, который тебе поможет. По заданиям: 1 - это данеследка, пожалуй самый сложный тип задания, она представляет собой обычную да-нетку составленную по сериалу След. разгадай её ну или задай 5 положительных вопросов из 10. 2 - Это блиц-крик продолжи фразу, если будет смешно 1 балл, если правильно то 2. 3 - угадай фильм/сериал по кадру, думаешь просто? Сложность в том, что все сериалы и фильмы 2021 года. 4 - правда или ложь, 2021 был богат на бред, угадай реальную новость из 4х вариантов и иди вперёд с 4-мя баллами. 5 - это караоке, вы поете великолепно, спой выпавшую песню. Остальные тебя оценят по 5-ти балльной шкале, на сколько оценят - столько и получишь. 6 - это задание по мему, тут может случится всё что угодно. Сложно? Какой год такая и игра, но я в тебя верю. В бой самурай, поднимем бокалы! 
    `,
  img: 'https://memepedia.ru/wp-content/uploads/2016/03/harold-hide-the-pain-meme-03.jpg',
};
