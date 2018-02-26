import readlineSync from 'readline-sync';
import chalk from 'chalk';
import even from './games/even';
import calc from './games/calc';
import gcd from './games/gcd';
import balance from './games/balance';
import progression from './games/progression';
import prime from './games/prime';

export const welcome = () => {
  console.log(chalk.yellow.underline('Welcome to the Brain Games!\n'));
  const name = readlineSync.question(chalk`{green ${'May I have your name?\n'}}`);
  console.log(chalk`{yellow ${`\nHello, ${name}.`}}`);
  console.log(chalk.green('Choose one of the Brain Games (type number)!'));
  return name;
};

const choiceGame = (choice) => {
  switch (choice) {
    case '1':
      return even();
    case '2':
      return calc();
    case '3':
      return gcd();
    case '4':
      return balance();
    case '5':
      return progression();
    case '6':
      return prime();
    default:
      break;
  }
  return -1;
};

const runBrainGames = () => {
  const name = welcome();
  let flag = true;
  while (flag) {
    const choice = readlineSync.question(chalk`{yellow
${'1. Brain-even'}
${'2. Brain-calc'}
${'3. Brain-gcd'}
${'4. Brain-balance'}
${'5. Brain-progression'}
${'6. Brain-prime'}
${'For exit tap any other key'}
}`);
    const resultGame = choiceGame(choice);
    if (resultGame === -1) {
      flag = false;
      break;
    }
    const correctAnswer = `\nCongratulations, ${name}!\nLet's play again?`;
    const incorrectAnswer = `Let's try again, ${name}!`;
    const finalStr = resultGame === 1 ? correctAnswer : incorrectAnswer;
    console.log(chalk`{magenta ${finalStr}}`);
  }
  return -1;
};

export default runBrainGames;
