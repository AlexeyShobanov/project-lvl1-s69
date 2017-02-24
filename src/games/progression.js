
import { computeRandomInteger, runSelectedGame } from '../commonFunction';

const makeArithmeticalProgression = (dimension) => {
  const firstNum = computeRandomInteger(1, 100);
  const step = computeRandomInteger(1, 100);
  const iter = (num, count, acc) => {
    if (count === 1) {
      return acc;
    }
    const newAcc = [...acc, num];
    return iter(num + step, count - 1, newAcc);
  };
  return iter(firstNum, dimension, []);
};

const makeMissInArithmeticalProgression = (dimension) => {
  const arithmeticalProgression = makeArithmeticalProgression(dimension);
  const passPosission = computeRandomInteger(1, dimension - 1);
  return [passPosission, ...arithmeticalProgression];
};

const task = 'What number is missing in this progression?';

const runBrainProgression = () => {
  const dimension = 10;
  const question = (randomData) => {
    const [passPosission, ...arithmeticalProgression] = [...randomData];
    const passNum = arithmeticalProgression[passPosission];
    return arithmeticalProgression.join(' ').replace(String(passNum), '..');
  };
  const getResult = randomData => randomData[randomData[0] + 1];
  const randomData = () => makeMissInArithmeticalProgression(dimension);
  runSelectedGame(task, randomData, question, getResult);
};

export default runBrainProgression;
