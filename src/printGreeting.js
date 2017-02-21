const printGreeting = (name) => {
  const greetingLine = `\nWelcome to the Brain Games!\nAnswer "yes" if number odd otherwise answer "no".\n\nMay I have your name? ${name}\nHello, ${name}!\n`;

  return console.log(greetingLine);
};

export default printGreeting;
