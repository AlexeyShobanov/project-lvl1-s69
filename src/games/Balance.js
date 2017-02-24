import { computeRandomInteger, runSelectedGame } from '../commonFunction';

const iterBalance = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const [a, b, ...rest] = arr;
  const diffAbs = Math.abs(a - b);
  const [first, second] = diffAbs < 2 ? [a, b] : [Math.floor((a + b) / 2), Math.ceil((a + b) / 2)];
  return [first, ...iterBalance([second, ...rest])];
};

const checkBalance = (arr) => {
  if (arr.length < 2) {
    return true;
  }
  const [a, b, ...rest] = arr;
  if (Math.abs(a - b) > 1) {
    return false;
  }
  return checkBalance([b, ...rest]);
};

const calcBalanceArr = (arr) => {
  if (checkBalance(arr)) {
    return arr;
  }
  const newArr = iterBalance(arr);
  return calcBalanceArr(newArr);
};

const findBalanceNum = (num) => {
  const strFromNum = String(num);
  const arrFromNum = strFromNum.split('').map(element => Number(element));
  const balanceArr = calcBalanceArr(arrFromNum);
  const balanceNumNormalized = balanceArr.sort().join('');
  return balanceNumNormalized;
};


const task = 'Balance the given number.';

const runBrainBalance = () => {
  const question = randomData => `${randomData}`;
  const getResult = randomData => findBalanceNum(randomData);
  const randomData = () => computeRandomInteger(100, 10000);
  runSelectedGame(task, randomData, question, getResult);
};

export default runBrainBalance;
