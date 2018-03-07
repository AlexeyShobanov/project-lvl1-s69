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

const task = 'Find the greatest common divisor of given numbers.';
const getData = () => makeRandomPairNums(minNum, maxNum);
const getQuestion = randomData => `${randomData.fistOperand} and ${randomData.secondOperand}`;
const getResult = randomData => findGcd(randomData);

const gcd = () => runSelectedGame(task, getData, getQuestion, getResult);

export default gcd;
