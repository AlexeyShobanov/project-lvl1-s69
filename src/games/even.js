import { computeRandomInteger, runSelectedGame } from '../commonFunction';

const maxNum = 100; // The maximum number
const minNum = 1; // The minimum number
const currentTask = 'Answer "yes" if number even otherwise answer "no".';

const checkEvenNum = (num) => {
  const result = num % 2 === 0 ? 'yes' : 'no';
  return result;
};

const even = () => {
  const gameData = {
    task: currentTask,
    data: () => computeRandomInteger(minNum, maxNum),
    question: randomData => `${randomData}`,
    result: randomData => checkEvenNum(randomData),
  };
  return runSelectedGame(gameData);
};

export default even;
