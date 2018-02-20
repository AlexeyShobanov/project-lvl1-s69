import { computeRandomInteger, runSelectedGame } from '../commonFunction';

const maxNum = 100; // The maximum number
const minNum = 1; // The minimum number

const checkEvenNum = (num) => {
  const result = num % 2 === 0 ? 'yes' : 'no';
  return result;
};

const even = (name) => {
  const gameData = {
    userName: name,
    task: 'Answer "yes" if number odd otherwise answer "no".',
    data: () => computeRandomInteger(minNum, maxNum),
    question: randomData => `${randomData}`,
    result: randomData => checkEvenNum(randomData),
  };
  runSelectedGame(gameData);
};

export default even;
