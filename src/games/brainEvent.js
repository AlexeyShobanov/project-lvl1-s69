import readlineSync from 'readline-sync';

const getAnswer = (question) => {
  const gamerAnswer = readlineSync.question(question);
  return gamerAnswer;
};

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
    const yourAnswer = getAnswer('Your answer: ');
    if (yourAnswer !== answer) {
      const incorrectAnswer = `'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`;
      return console.log(incorrectAnswer);
    }
    iter += 1;
  }
  return console.log(`Correct!\nCongratulations, ${name}!`);
};

const printGreeting = (name) => {
  const greetingLine = `\nWelcome to the Brain Games!\nAnswer "yes" if number odd otherwise answer "no".\n\nMay I have your name? ${name}\nHello, ${name}!\n`;

  return console.log(greetingLine);
};

const checkIntegrityInGreeting = () => {
  const name = getAnswer('What is your name? ');
  printGreeting(name);
  checkIntegrity(name);
};

export default checkIntegrityInGreeting;
export { computeRandomInteger, getAnswer };
