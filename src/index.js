import checkIntegrityInGreeting from './games/brainEvent';
import calcExpressionWithGreeting from './games/brainCalc';
import findNodWithGreeting from './games/brainGcd';

const brainEvent = checkIntegrityInGreeting();
const brainCalc = calcExpressionWithGreeting();
const brainGsd = findNodWithGreeting();

export { brainEvent, brainCalc, brainGsd };
