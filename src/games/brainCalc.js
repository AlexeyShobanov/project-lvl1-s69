import { car, cdr, cons } from 'hexlet-pairs';
import { calcExpression, getAnswer, checkAnswer, createRandomPair } from './commonFunction';

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

const calcExpressionWithGreeting = () => {
  const name = getAnswer('What is your name? ');
  const taskString = 'What is the result of the expression?';
  const questionString = randomData => `${car(car(randomData))} ${cdr(randomData)} ${cdr(car(randomData))}`;
  const getResult = randomData => calcExpression(cdr(randomData), car(randomData));
  const randomData = iter => cons(createRandomPair(), nextOperator(iter));
  checkAnswer(name, taskString, randomData, questionString, getResult);
};

export default calcExpressionWithGreeting;
