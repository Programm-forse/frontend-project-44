import {
  welcomeGames, getUserAnswer, isRigthAswer, generateRandomNumber,
} from '../index.js';

const getSign = () => {
  const signs = ['+', '-', '*'];
  const num = generateRandomNumber(3);
  return signs[num];
};

// console.log(getSign());

const gameRules = () => {
  console.log('What is the result of the expression?');
  return 0;
};

const getExpr = (sign, number1, number2) => {
  const result = `${number1} ${sign} ${number2}`;
  return result;
};

const getCalc = (sign, number1, number2) => {
  let result = 0;
  switch (sign) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      result = null;
  }
  return result;
};

const game = () => {
  const userName = welcomeGames();
  gameRules();
  for (let i = 0; i < 3; i += 1) {
    const number1 = generateRandomNumber(10);
    const number2 = generateRandomNumber(10);
    const sign = getSign();
    console.log(`Question: ${getExpr(sign, number1, number2)}`);
    const answer = getUserAnswer();
    const calc = getCalc(sign, number1, number2).toString();
    if (isRigthAswer(answer, calc) === true) {
      console.log('Correct!');
    } else {
      return (console.log(`'${answer}' is wrong answer ;(. Correct answer was '${calc}'.\n Let's try again, ${userName}!`));
    }
  }
  const win = `Congratulations, ${userName}!`;
  return console.log(win);
};

export default game;
