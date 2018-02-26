import { computeRandomInteger, runSelectedGame } from '../commonFunction';

const maxNum = 1000; // The maximum number
const minNum = 100; // The minimum number
const currentTask = 'Answer "yes" if number prime otherwise answer "no".';

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


const prime = () => {
  const gameData = {
    task: currentTask,
    data: () => computeRandomInteger(minNum, maxNum),
    question: randomData => `${randomData}`,
    result: randomData => (isPrime(randomData) ? 'yes' : 'no'),
  };
  return runSelectedGame(gameData);
};

export default prime;
