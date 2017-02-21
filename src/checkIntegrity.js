import getAnswer from './getAnswer';

const computeRandomInteger = () => {
  const number = Math.floor(Math.random() * 99) + 1;
  return number;
};

const checkIntegrity = (name) => {
  let iter = 0;
  while (iter < 3) {
    const randomNumber = computeRandomInteger();
    console.log(`Question: ${randomNumber}`);
    const answer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (getAnswer('Your answer: ') !== answer) {
      const incorrectAnswer = `'${answer}' is wrong answer ;(. Correct answer was '${answer === 'no' ? 'yes' : 'no'}'.\nLet's try again, ${name}!`;
      return console.log(incorrectAnswer);
    }
    iter += 1;
  }
  return console.log(`Correct!\nCongratulations, ${name}!`);
};

export default checkIntegrity;
