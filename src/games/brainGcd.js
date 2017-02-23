import { cons, car, cdr } from 'hexlet-pairs';
import { divRemPair, getAnswer, createRandomPair, checkAnswer } from './commonFunction';

const findNod = (pair) => {
  const iter = (numbs, acc) => {
    if (acc === 0) {
      return car(numbs);
    }
    const remainderDiv = divRemPair(numbs);
    return iter(cons(cdr(numbs), remainderDiv), remainderDiv);
  };
  return iter(pair, 1);
};

const findNodWithGreeting = () => {
  const name = getAnswer('What is your name? ');
  const taskString = 'Find the greatest common divisor of given numbers.';
  const questionString = randomData => `${car(randomData)} ${cdr(randomData)}`;
  const getResult = randomData => findNod(randomData);
  const randomData = () => createRandomPair();
  checkAnswer(name, taskString, randomData, questionString, getResult);
};

export default findNodWithGreeting;
