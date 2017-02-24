import { computeRandomInteger, runSelectedGame } from '../commonFunction';

const task = 'Answer "yes" if number odd otherwise answer "no".';

const runBrainEven = () => {
  const question = randomData => `${randomData}`;
  const getResult = (randomData) => {
    const result = randomData % 2 === 0 ? 'yes' : 'no';
    return result;
  };
  const randomData = () => computeRandomInteger(1, 100);
  runSelectedGame(task, randomData, question, getResult);
};

export default runBrainEven;
