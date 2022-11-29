import {
  welcomeGames, getUserAnswer, isRigthAswer, generateRandomNumber,
} from '../index.js';

const gameRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
  return 0;
};

const result = (number1, number2) => {
  // first property gcd

  let gratestCommonDivision = 0;
  const minNum = (number1 < number2) ? number1 : number2;
  const maxNum = (number1 > number2) ? number1 : number2;

  for (let i = minNum; i > 0; i -= 1) {
    if (minNum % i === 0) {
      if (maxNum % i === 0) {
        gratestCommonDivision += i;
        break;
      }
    }
  }
  return gratestCommonDivision.toString();
};

const game = () => {
  const userName = welcomeGames();
  gameRules();
  for (let i = 0; i < 3; i += 1) {
    const number1 = generateRandomNumber(10);
    const number2 = generateRandomNumber(10);
    console.log(`Question: ${number1} ${number2}`);
    const correctAnswer = result(number1, number2);
    const answer = getUserAnswer();
    if (isRigthAswer(answer, correctAnswer) === true) {
      console.log('Correct!');
    } else {
      return (console.log(`You '${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!`));
    }
  }
  const win = `Congratulations, ${userName}!`;
  return console.log(win);
};

export default game;
