import {
  welcomeGames, getUserAnswer, isRigthAswer, generateRandomNumber,
} from '../index.js';

const gameRules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  return 0;
};
const getPrimeNumbers = () => {
  const primeNumbers = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
    31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109,
    113, 127, 131, 137, 139, 149, 151, 157,
    163, 167, 173, 179, 181, 191, 193, 197, 199];
  return primeNumbers;
};

const getCorrectAnswer = (primeNumbers, randomNumbers) => {
  if (primeNumbers.includes(randomNumbers)) {
    return 'yes';
  }
  return 'no';
};

const game = () => {
  const userName = welcomeGames();
  gameRules();
  const primeConst = getPrimeNumbers();
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateRandomNumber(100);
    console.log(`Question: ${randomNumber}`);
    const answer = getUserAnswer();
    const correctAnswer = getCorrectAnswer(primeConst, randomNumber);
    if (isRigthAswer(answer, correctAnswer) === true) {
      console.log('Correct!');
    } else {
      return (console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!`));
    }
  }
  const win = `Congratulations, ${userName}!`;
  return console.log(win);
};

export default game;
