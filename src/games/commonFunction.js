import { cons } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

export const getAnswer = (question) => {
  const gamerAnswer = readlineSync.question(question);
  return gamerAnswer;
};

export const printGreeting = (name, task) => {
  const greetingLine = `\nWelcome to the Brain Games!\n${task}\n\nMay I have your name? ${name}\nHello, ${name}!\n`;
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

export const runSelectedGame = (name, task, getData, question, getResult) => {
  printGreeting(name, task);
  let iter = 0;
  while (iter < 3) {
    const randomData = getData(iter);
    console.log(`Question: ${question(randomData)}`);
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
