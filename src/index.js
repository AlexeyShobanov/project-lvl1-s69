import brainEven from './games/brainEven';
import brainCalc from './games/brainCalc';
import brainGcd from './games/brainGcd';
import { getAnswer } from './commonFunction';

const name = getAnswer('What is your name? ');

const runBrainEven = brainEven(name);
const runBrainCalc = brainCalc(name);
const runBrainGcd = brainGcd(name);

export { runBrainEven, runBrainCalc, runBrainGcd };
