import { computeRandomInteger, runSelectedGame } from '../commonFunction';

const brainEven = name => () => {
  // const name = getAnswer('What is your name? ');
  const task = 'Answer "yes" if number odd otherwise answer "no".';
  const question = randomData => `${randomData}`;
  const getResult = (randomData) => {
    const result = randomData % 2 === 0 ? 'yes' : 'no';
    return result;
  };
  const randomData = () => computeRandomInteger(1, 100);
  runSelectedGame(name, task, randomData, question, getResult);
};

export default brainEven;
