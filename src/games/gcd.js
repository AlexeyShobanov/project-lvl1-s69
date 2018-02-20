import { runSelectedGame, makeRandomPairNums } from '../commonFunction';

const maxNum = 100; // The maximum number
const minNum = 1; // The minimum number

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

const gcd = (name) => {
  const gameData = {
    userName: name,
    task: 'Find the greatest common divisor of given numbers.',
    data: () => makeRandomPairNums(minNum, maxNum),
    question: randomData => `${randomData.fistOperand} and ${randomData.secondOperand}`,
    result: randomData => findGcd(randomData),
  };
  runSelectedGame(gameData);
};

export default gcd;
