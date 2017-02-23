import { car, cdr, cons } from 'hexlet-pairs';
import { runSelectedGame, createRandomPair, subPair, mulPair, sumPair } from '../commonFunction';

const calcExpression = (operator, pair) => {
  switch (operator) {
    case '-':
      return subPair(pair);
    case '*':
      return mulPair(pair);
    default:
      return sumPair(pair);
  }
};

const nextOperator = (iter) => {
  switch (String(iter)) {
    case '0':
      return '+';
    case '1':
      return '-';
    default:
      return '*';
  }
};

const runBrainCalc = () => {
  const task = 'What is the result of the expression?';
  const question = randomData => `${car(car(randomData))} ${cdr(randomData)} ${cdr(car(randomData))}`;
  const getResult = randomData => calcExpression(cdr(randomData), car(randomData));
  const randomData = iter => cons(createRandomPair(1, 100), nextOperator(iter));
  runSelectedGame(task, randomData, question, getResult);
};

export default runBrainCalc;
