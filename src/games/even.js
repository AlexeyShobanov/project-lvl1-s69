import { computeRandomInteger, runSelectedGame } from '../commonFunction';

const task = 'Answer "yes" if number odd otherwise answer "no".';
const maxNum = 100; // The maximum number
const minNum = 1; // The minimum number

const runBrainEven = () => {
  const question = randomData => `${randomData}`;
  const getResult = (randomData) => {
    const result = randomData % 2 === 0 ? 'yes' : 'no';
    return result;
  };
  const randomData = () => computeRandomInteger(minNum, maxNum);
  runSelectedGame(task, randomData, question, getResult);
};

export default runBrainEven;
