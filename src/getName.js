import readlineSync from 'readline-sync';

const getName = () => {
  const gamerName = readlineSync.question('What is your name? ');
  return gamerName;
};

export default getName;
