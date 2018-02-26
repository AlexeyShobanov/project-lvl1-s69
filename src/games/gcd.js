import { runSelectedGame, makeRandomPairNums } from '../commonFunction';

const maxNum = 100; // The maximum number
const minNum = 1; // The minimum number
const currentTask = 'Find the greatest common divisor of given numbers.';

const findGcd = (data) => {
  const iter = (firstNum, secondNum) => {
    const remainder = firstNum % secondNum;
    if (remainder === 0) {
      return secondNum;
    }
    return iter(secondNum, remainder);
  };
  return iter(data.fistOperand, data.secondOperand);
};

const gcd = () => {
  const gameData = {
    task: currentTask,
    data: () => makeRandomPairNums(minNum, maxNum),
    question: randomData => `${randomData.fistOperand} and ${randomData.secondOperand}`,
    result: randomData => findGcd(randomData),
  };
  return runSelectedGame(gameData);
};

export default gcd;
