import { computeRandomInteger, runSelectedGame } from '../commonFunction';

const maxNum = 100; // The maximum number
const minNum = 1; // The minimum number

const checkEvenNum = (num) => {
  const result = num % 2 === 0 ? 'yes' : 'no';
  return result;
};

const task = 'Answer "yes" if number even otherwise answer "no".';
const getData = () => computeRandomInteger(minNum, maxNum);
const getQuestion = randomData => `${randomData}`;
const getResult = randomData => checkEvenNum(randomData);

const even = () => runSelectedGame(task, getData, getQuestion, getResult);

export default even;
