import readlineSync from 'readline-sync';
import { welcomeGames } from './index.js';
// general logic welcome step

// const getUserName = () => {
//   const userName = readlineSync.question('May I have you name? ');
//   return userName;
// };

// const printGreetingStart = () => {
//   console.log('Welcome to the Brain Games!');
//   // const greeting = `Hi ${name}!`;
//   return 0;
// };
// const printGreetingName = (name) => {
//   console.log(`Hi, ${name}!`);
//   return 0;
// };
// printGreeting();

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

// askQuestion();

const getUserAnswer = () => {
  const userAnswer = readlineSync.question('You answer: ');
  return userAnswer;
};

const isRigthAswer = (answer, even) => {
  if (answer === even) {
    return true;
  }
  return false;
};

// console.log(rigthAswer());

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
      return (console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${userName}!`));
    }
  }
  return console.log(win);
};

export default game;
