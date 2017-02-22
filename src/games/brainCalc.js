import { cons, car, cdr } from 'hexlet-pairs';
import { computeRandomInteger, getAnswer } from './brainEvent';


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

const printGreeting = (name) => {
  const greetingLine = `\nWelcome to the Brain Games!\nWhat is the result of the expression?\n\nMay I have your name? ${name}\nHello, ${name}!\n`;
  return console.log(greetingLine);
};

const calcExpressionWithGreeting = () => {
  const name = getAnswer('What is your name? ');
  printGreeting(name);
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
