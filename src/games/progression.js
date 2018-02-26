import { computeRandomInteger, runSelectedGame } from '../commonFunction';

const dimension = 10; // The number of terms of an arithmetic progression
const maxNum = 100; // The maximum number
const minNum = 1; // The minimum number
const currentTask = 'What number is missing in this progression?';

const makeArithmeticalProgression = () => {
  const firstNum = computeRandomInteger(minNum, maxNum);
  const step = computeRandomInteger(minNum, maxNum);
  const iter = (num, count, acc) => {
    if (count === 1) {
      return acc;
    }
    const newAcc = [...acc, num];
    return iter(num + step, count - 1, newAcc);
  };
  return iter(firstNum, dimension, []);
};

const makeMissInArithmeticalProgression = () => {
  const arithmeticalProgression = makeArithmeticalProgression(dimension);
  const passPosission = computeRandomInteger(1, dimension - 1);
  return {
    pass: passPosission,
    progression: arithmeticalProgression,
  };
};

const progression = () => {
  const gameData = {
    task: currentTask,
    data: () => makeMissInArithmeticalProgression(),
    question: randomData => randomData.progression.join(' ').replace(String(randomData.progression[randomData.pass]), '..'),
    result: randomData => randomData.progression[randomData.pass],
  };
  return runSelectedGame(gameData);
};

export default progression;
