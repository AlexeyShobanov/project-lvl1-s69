import { cons, car, cdr } from 'hexlet-pairs';
import { divRemPair, getAnswer, printGreeting, createRandomPair, checkAnswer } from './commonFunction';

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
  const specialString = 'Find the greatest common divisor of given numbers.';
  printGreeting(name, specialString);
  const questionString = randomData => `${car(randomData)} ${cdr(randomData)}`;
  const getResult = randomData => findNod(randomData);
  const randomData = () => createRandomPair();
  checkAnswer(name, randomData, questionString, getResult);
};

export default findNodWithGreeting;
