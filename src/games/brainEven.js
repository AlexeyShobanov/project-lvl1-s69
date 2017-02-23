import { computeRandomInteger, runSelectedGame } from './commonFunction';

const runBrainEven = () => (name) => {
  // const name = getAnswer('What is your name? ');
  const taskString = 'Answer "yes" if number odd otherwise answer "no".';
  const question = randomData => `${randomData}`;
  const getResult = (randomData) => {
    const result = randomData % 2 === 0 ? 'yes' : 'no';
    return result;
  };
  const randomData = () => computeRandomInteger();
  runSelectedGame(name, taskString, randomData, question, getResult);
};

export default runBrainEven;
