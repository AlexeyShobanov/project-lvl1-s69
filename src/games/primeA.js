import { computeRandomInteger, runSelectedGame } from '../commonFunction';

const checkPrime = (num) => {
  let baseVerification = 2;
  const arr = [];
  while (baseVerification * 2 < num) {
    let stepVerification = 2;
    while (stepVerification * baseVerification <= num) {
      const compositeNum = baseVerification * stepVerification;
      if (num === compositeNum) {
        return false;
      }
      if (!arr.includes(compositeNum)) {
        arr.push(compositeNum);
      }
      stepVerification += 1;
    }
    baseVerification += 1;
    while (arr.includes(baseVerification)) {
      baseVerification += 1;
    }
  }
  return true;
};

const task = 'Answer "yes" if number prime otherwise answer "no".';

const runBrainPrime = () => {
  const question = randomData => `${randomData}`;
  const getResult = (randomData) => {
    const result = checkPrime(randomData) ? 'yes' : 'no';
    return result;
  };
  const randomData = () => computeRandomInteger(2, 1000);
  runSelectedGame(task, randomData, question, getResult);
};

export default runBrainPrime;
