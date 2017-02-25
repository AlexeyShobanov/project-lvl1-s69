import { computeRandomInteger, runSelectedGame } from '../commonFunction';

const makeSieveOfEratosthenes = (dimension) => {
  const findUniqBase = arr => (num) => {
    if (!arr.includes(num)) {
      return num;
    }
    return findUniqBase(arr)(num + 1);
  };
  const makeSieveForStep = baseVerification => (stepVerification, acc2) => {
    if (stepVerification * baseVerification > dimension) {
      return acc2;
    }
    const [...newAcc2] = acc2.includes(stepVerification * baseVerification) ? [...acc2] : [...acc2, stepVerification * baseVerification];
    return makeSieveForStep(baseVerification)(stepVerification + 1, newAcc2);
  };
  const makeSieveForBase = (baseVerification, acc) => {
    if (baseVerification * 2 >= dimension) {
      return acc;
    }
    const newAcc = makeSieveForStep(baseVerification)(2, acc);
    const NewBaseVerification = findUniqBase(acc)(baseVerification + 1);
    return makeSieveForBase(NewBaseVerification, newAcc);
  };
  return makeSieveForBase(2, []);
};

const isPrime = (num, sieveOfEratosthenes) => {
  const answer = sieveOfEratosthenes.includes(num) ? 'no' : 'yes';
  return answer;
};

const dimension = 1000; // The maximum number
const sieveOfEratosthenes = makeSieveOfEratosthenes(dimension);

const task = 'Answer "yes" if number prime otherwise answer "no".';

const runBrainPrime = () => {
  const question = randomData => `${randomData}`;
  const getResult = randomData => isPrime(randomData, sieveOfEratosthenes);
  const randomData = () => computeRandomInteger(2, dimension);
  runSelectedGame(task, randomData, question, getResult);
};

export default runBrainPrime;
