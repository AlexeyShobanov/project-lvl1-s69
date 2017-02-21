import readlineSync from 'readline-sync';


const printGreeting = () => {
  const gamerName = readlineSync.question('What is your name? ');
  const greetingLine = `Welcome to the Brain Games!\n\nMay I have your name? ${gamerName}\nHello, ${gamerName}!`;

  return console.log(greetingLine);
};

export default printGreeting;
