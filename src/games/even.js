import { computeRandomInteger, runSelectedGame } from '../commonFunction';

const maxNum = 100; // The maximum number
const minNum = 1; // The minimum number

const checkEvenNum = (num) => {
  const result = num % 2 === 0 ? 'yes' : 'no';
  return result;
};

const gameData = {
  task: 'Answer "yes" if number even otherwise answer "no".',
  getData: () => computeRandomInteger(minNum, maxNum),
  getQuestion: randomData => `${randomData}`,
  getResult: randomData => checkEvenNum(randomData),
};

const even = () => runSelectedGame(gameData);

export default even;
