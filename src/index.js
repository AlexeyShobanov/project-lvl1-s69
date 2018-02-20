import readlineSync from 'readline-sync';
import even from './games/even';
import calc from './games/calc';
import gcd from './games/gcd';
import balance from './games/balance';
import progression from './games/progression';
import prime from './games/prime';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${name}.`);
  return name;
};

export const choiceGame = (name) => {
  const choice = readlineSync.question(`May be play?
Choose one of the Brain Games (type number)!
1. Brain-even
2. Brain-calc
3. Brain-gcd
4. Brain-balance
5. Brain-progression
6. Brain-prime
For exit tap any other key
`);
  switch (choice) {
    case '1':
      even(name);
      break;
    case '2':
      calc(name);
      break;
    case '3':
      gcd(name);
      break;
    case '4':
      balance(name);
      break;
    case '5':
      progression(name);
      break;
    case '6':
      prime(name);
      break;
    default:
      break;
  }
  return -1;
};

export const runCalcGame = () => calc(welcome());
export const runEvenGame = () => even(welcome());
export const runGcdGame = () => gcd(welcome());
export const runBalanceGame = () => balance(welcome());
export const runProgressionGame = () => progression(welcome());
export const runPrimeGame = () => prime(welcome());
