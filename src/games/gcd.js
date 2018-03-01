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

const gameData = {
  task: 'Find the greatest common divisor of given numbers.',
  getData: () => makeRandomPairNums(minNum, maxNum),
  getQuestion: randomData => `${randomData.fistOperand} and ${randomData.secondOperand}`,
  getResult: randomData => findGcd(randomData),
};

const gcd = () => runSelectedGame(gameData);

export default gcd;
