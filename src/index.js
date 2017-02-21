import printGreeting from './printGreeting';
import getAnswer from './getAnswer';
import checkIntegrity from './checkIntegrity';

const checkIntegrityInGreeting = () => {
  const name = getAnswer('What is your name? ');
  printGreeting(name);
  checkIntegrity(name);
};

export default checkIntegrityInGreeting;
