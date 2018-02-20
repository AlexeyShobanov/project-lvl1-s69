import { computeRandomInteger, runSelectedGame } from '../commonFunction';

const maxNum = 1000; // The maximum number
const minNum = 100; // The minimum number

const calcBalanceNum = (num) => {
  if (num < 10) {
    return num;
  }
  const strFromNum = String(num);
  const arrFromNum = strFromNum.split('').map(element => Number(element));
  const sumNumOfArr = arrFromNum.reduce((result, item) => result + item, 0);
  const iter = (remainderSum, remainderLength, acc) => {
    if (remainderLength === 2) {
      return [...acc, Math.floor(remainderSum / 2), Math.ceil(remainderSum / 2)];
    }
    const currentDigit = Math.floor(remainderSum / remainderLength);
    return iter(remainderSum - currentDigit, remainderLength - 1, [...acc, currentDigit]);
  };
  const balanceArr = iter(sumNumOfArr, arrFromNum.length, []);
  const balanceNumNormalized = balanceArr.sort().join('');
  return balanceNumNormalized;
};

const balance = (name) => {
  const gameData = {
    userName: name,
    task: 'Balance the given number.',
    data: () => computeRandomInteger(minNum, maxNum),
    question: randomData => `${randomData}`,
    result: randomData => calcBalanceNum(randomData),
  };
  runSelectedGame(gameData);
};

export default balance;
