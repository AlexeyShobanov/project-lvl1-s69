import { cons, car, cdr } from 'hexlet-pairs';
import { createRandomPair, runSelectedGame, divRemPair } from '../commonFunction';

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

const task = 'Find the greatest common divisor of given numbers.';
const maxNum = 100; // The maximum number
const minNum = 1; // The minimum number

const runBrainGcd = () => {
  const question = randomData => `${car(randomData)} ${cdr(randomData)}`;
  const getResult = randomData => findNod(randomData);
  const randomData = () => createRandomPair(minNum, maxNum);
  runSelectedGame(task, randomData, question, getResult);
};

export default runBrainGcd;
