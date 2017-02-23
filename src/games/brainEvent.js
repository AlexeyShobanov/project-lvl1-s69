import { computeRandomInteger, checkAnswer } from './commonFunction';

const checkIntegrityInGreeting = () => (name) => {
  // const name = getAnswer('What is your name? ');
  const taskString = 'Answer "yes" if number odd otherwise answer "no".';
  const questionString = randomData => `${randomData}`;
  const getResult = (randomData) => {
    const result = randomData % 2 === 0 ? 'yes' : 'no';
    return result;
  };
  const randomData = () => computeRandomInteger();
  checkAnswer(name, taskString, randomData, questionString, getResult);
};

export default checkIntegrityInGreeting;
