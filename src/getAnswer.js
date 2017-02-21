import readlineSync from 'readline-sync';

const getAnswer = (question) => {
  const gamerAnswer = readlineSync.question(question);
  return gamerAnswer;
};

export default getAnswer;
