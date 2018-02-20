import readlineSync from 'readline-sync';

export const computeRandomInteger = (min, max) => {
  const number = Math.floor(Math.random() * (max - min)) + min;
  return number;
};

export const makeRandomPairNums = (minNum, maxNum) => {
  const randomPair = {
    fistOperand: computeRandomInteger(minNum, maxNum),
    secondOperand: computeRandomInteger(minNum, maxNum),
  };
  return randomPair;
};

export const getAnswer = (question) => {
  const gamerAnswer = readlineSync.question(question);
  return gamerAnswer;
};

export const runSelectedGame = (gameData) => {
  console.log(gameData.task);
  for (let i = 0; i < 3; i += 1) {
    const randomData = gameData.data(i);
    console.log(`Question: ${gameData.question(randomData)}`);
    const result = gameData.result(randomData);
    const yourAnswer = getAnswer('Your answer: ');
    if (yourAnswer !== String(result)) {
      const incorrectAnswer = `'${yourAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${gameData.userName}!`;
      return console.log(incorrectAnswer);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${gameData.userName}!`);
};
