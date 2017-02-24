import { computeRandomInteger, runSelectedGame } from '../commonFunction';

const makeArithmeticalProgression = (dimension) => {
  const firstNum = computeRandomInteger(1, 100);
  const step = computeRandomInteger(1, 100);
  const iter = (currentNum, arithmeticalProgression) => {
    const sizeMap = arithmeticalProgression.size;
    if (sizeMap === dimension) {
      return arithmeticalProgression;
    }
    return iter(currentNum + step, arithmeticalProgression.set(sizeMap, currentNum));
  };
  return iter(firstNum, new Map());
};

const makeMissInArithmeticalProgression = (dimension) => {
  const arithmeticalProgression = makeArithmeticalProgression(dimension);
  const passPosission = computeRandomInteger(1, 10);
  const passNum = arithmeticalProgression.get(passPosission);
  arithmeticalProgression.set('pass', passNum);
  arithmeticalProgression.set(passPosission, '..');
  return arithmeticalProgression;
};

const runBrainProgression = () => {
  const dimension = 10;
  const task = 'What number is missing in this progression?';
  const question = (randomData) => {
    const progressionForPrint = [...randomData.values()];
    progressionForPrint.pop();
    return progressionForPrint.join(' ');
  };
  const getResult = randomData => randomData.get('pass');
  const randomData = () => makeMissInArithmeticalProgression(dimension);
  runSelectedGame(task, randomData, question, getResult);
};

export default runBrainProgression;
