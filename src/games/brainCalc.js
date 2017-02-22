import { cons, car, cdr } from 'hexlet-pairs';
import { computeRandomInteger, getAnswer, printGreeting } from './brainEvent';


const createRandomPair = () => {
  const randomPair = cons(computeRandomInteger(), computeRandomInteger());
  return randomPair;
};

const sumPair = (pair) => {
  const sum = car(pair) + cdr(pair);
  return sum;
};

const subPair = (pair) => {
  const sub = car(pair) - cdr(pair);
  return sub;
};

const mulPair = (pair) => {
  const mul = car(pair) * cdr(pair);
  return mul;
};

const divRemPair = (pair) => {
  const divRem = car(pair) % cdr(pair);
  return divRem;
};

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

const calcExpressionWithGreeting = () => {
  const name = getAnswer('What is your name? ');
  const specialString = 'What is the result of the expression?';
  printGreeting(name, specialString);
  const operators = ['+', '-', '*'];
  let i = 0;
  while (i < operators.length) {
    const randomPair = createRandomPair();
    const result = calcExpression(operators[i], randomPair);
    console.log(`Question: ${car(randomPair)} ${operators[i]} ${cdr(randomPair)}`);
    const yourAnswer = getAnswer('Your answer: ');
    if (Number(yourAnswer) !== result) {
      const incorrectAnswer = `${yourAnswer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`;
      return console.log(incorrectAnswer);
    }
    i += 1;
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default calcExpressionWithGreeting;
export { divRemPair, createRandomPair };
