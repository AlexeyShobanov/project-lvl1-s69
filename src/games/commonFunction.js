import { cons, car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

export const getAnswer = (question) => {
  const gamerAnswer = readlineSync.question(question);
  return gamerAnswer;
};

export const printGreeting = (name, specialString) => {
  const greetingLine = `\nWelcome to the Brain Games!\n${specialString}\n\nMay I have your name? ${name}\nHello, ${name}!\n`;
  return console.log(greetingLine);
};

export const computeRandomInteger = () => {
  const number = Math.floor(Math.random() * 99) + 1;
  return number;
};

export const createRandomPair = () => {
  const num1 = computeRandomInteger();
  const num2 = computeRandomInteger();
  const randomPair = num1 > num2 ? cons(num1, num2) : cons(num2, num1);
  return randomPair;
};

export const sumPair = (pair) => {
  const sum = car(pair) + cdr(pair);
  return sum;
};

export const subPair = (pair) => {
  const sub = car(pair) - cdr(pair);
  return sub;
};

export const mulPair = (pair) => {
  const mul = car(pair) * cdr(pair);
  return mul;
};

export const divRemPair = (pair) => {
  const divRem = car(pair) % cdr(pair);
  return divRem;
};

export const calcExpression = (operator, pair) => {
  switch (operator) {
    case '-':
      return subPair(pair);
    case '*':
      return mulPair(pair);
    default:
      return sumPair(pair);
  }
};

export const checkAnswer = (name, getData, questionString, getResult) => {
  let iter = 0;
  while (iter < 3) {
    const randomData = getData(iter);
    console.log(`Question: ${questionString(randomData)}`);
    const result = getResult(randomData);
    const yourAnswer = getAnswer('Your answer: ');
    if (yourAnswer !== String(result)) {
      const incorrectAnswer = `'${yourAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`;
      return console.log(incorrectAnswer);
    }
    console.log('Correct!');
    iter += 1;
  }
  return console.log(`Correct!\nCongratulations, ${name}!`);
};
