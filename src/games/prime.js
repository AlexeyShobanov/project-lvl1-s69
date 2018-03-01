import { computeRandomInteger, runSelectedGame } from '../commonFunction';

const maxNum = 1000; // The maximum number
const minNum = 100; // The minimum number

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameData = {
  task: 'Answer "yes" if number prime otherwise answer "no".',
  getData: () => computeRandomInteger(minNum, maxNum),
  getQuestion: randomData => `${randomData}`,
  getResult: randomData => (isPrime(randomData) ? 'yes' : 'no'),
};


const prime = () => runSelectedGame(gameData);

export default prime;
