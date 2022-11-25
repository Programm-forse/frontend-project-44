import { welcomeGames, getUserAnswer, isRigthAswer } from '../index.js';

const gameRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return 0;
};

const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const askQuestion = (num) => {
  console.log(`Question: ${num}`);
  return 0;
};

const game = () => {
  const userName = welcomeGames();
  gameRules();
  const win = `Congratulations, ${userName}!`;
  for (let i = 0; i < 3; i += 1) {
    const num = generateRandomNumber();
    askQuestion(num);
    const answer = getUserAnswer();
    const even = isEven(num);
    if (isRigthAswer(answer, even) === true) {
      console.log('Correct!');
    } else {
      return (console.log(`'${answer}' is wrong answer ;(. Correct answer was '${even}'.\n Let's try again, ${userName}!`));
    }
  }
  return console.log(win);
};

export default game;
