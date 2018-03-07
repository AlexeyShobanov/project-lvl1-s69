import readlineSync from 'readline-sync';
import chalk from 'chalk';

export const computeRandomInteger = (min, max) => {
  const number = Math.floor(Math.random() * (max - min)) + min;
  return number;
};

export const makeRandomPairNums = (minNum, maxNum) => {
  const randomPair = {
    fistOperand: computeRandomInteger(minNum, maxNum),
    secondOperand: computeRandomInteger(minNum, maxNum),
  };
  return randomPair;
};

export const runSelectedGame = (
  task: String,
  getData: Function,
  getQuestion: Function,
  getResult: Function,
) => {
  console.log(task);
  for (let i = 0; i < 3; i += 1) {
    const randomData = getData(i);
    console.log(chalk`{yellow ${'Question: '}}{green ${getQuestion(randomData)}}`);
    const result = getResult(randomData);
    const yourAnswer = readlineSync.question(chalk.yellow('Your answer: '));
    if (yourAnswer !== String(result)) {
      console.log(chalk`{red ${`"${yourAnswer}"`}}{yellow ${' is wrong answer ;(.'}}`);
      console.log(chalk`{yellow ${'Correct answer was '}}{green ${`"${result}"`}}{yellow ${'.'}}\n`);
      return 0;
    }
    console.log(chalk.green('Correct!'));
  }
  return 1;
};
