import printGreeting from './printGreeting';
import getName from './getName';
import checkIntegrity from './checkIntegrity';

const checkIntegrityInGreeting = () => {
  const name = getName();
  printGreeting(name);
  checkIntegrity(name);
};

export default checkIntegrityInGreeting;
