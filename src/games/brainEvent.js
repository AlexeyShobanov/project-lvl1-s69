import { computeRandomInteger, getAnswer, printGreeting, checkAnswer } from './commonFunction';

const checkIntegrityInGreeting = () => {
  const name = getAnswer('What is your name? ');
  const specialString = 'Answer "yes" if number odd otherwise answer "no".';
  printGreeting(name, specialString);
  const questionString = randomData => `${randomData}`;
  const getResult = (randomData) => {
    const result = randomData % 2 === 0 ? 'yes' : 'no';
    return result;
  };
  const randomData = () => computeRandomInteger();
  checkAnswer(name, randomData, questionString, getResult);
};

export default checkIntegrityInGreeting;
