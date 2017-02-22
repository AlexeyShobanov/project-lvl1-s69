import { cons, car, cdr } from 'hexlet-pairs';
import { divRemPair, createRandomPair } from './brainCalc';
import { getAnswer, printGreeting } from './brainEvent';

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
  let i = 0;
  while (i < 3) {
    const randomPair = createRandomPair();
    const result = findNod(randomPair);
    console.log(`Question: ${car(randomPair)} ${cdr(randomPair)}`);
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

export default findNodWithGreeting;
