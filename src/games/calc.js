import { computeRandomInteger, runSelectedGame } from '../commonFunction';

const maxNum = 100; // The maximum number
const minNum = 1; // The minimum number
const currentTask = 'What is the result of the expression?';

const choiceOperator = (iter) => {
  switch (String(iter)) {
    case '0':
      return '+';
    case '1':
      return '-';
    default:
      return '*';
  }
};

const makeRandomExpression = (iter) => {
  const randomExpression = {
    fistOperand: computeRandomInteger(minNum, maxNum),
    secondOperand: computeRandomInteger(minNum, maxNum),
    operator: choiceOperator(iter),
  };
  return randomExpression;
};

const calcExpression = (data) => {
  switch (data.operator) {
    case '-':
      return data.fistOperand - data.secondOperand;
    case '*':
      return data.fistOperand * data.secondOperand;
    default:
      return data.fistOperand + data.secondOperand;
  }
};

const calc = () => {
  const gameData = {
    task: currentTask,
    data: iter => makeRandomExpression(iter),
    question: randomData => `${randomData.fistOperand} ${randomData.operator} ${randomData.secondOperand}`,
    result: randomData => calcExpression(randomData),
  };
  return runSelectedGame(gameData);
};

export default calc;
