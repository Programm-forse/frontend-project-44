import {
  welcomeGames, getUserAnswer, isRigthAswer, generateRandomNumber,
} from '../index.js';

const gameRules = () => {
  console.log('What number is missing in the progression?');
  return 0;
};

const getRandomLength = () => {
  const randomLength = generateRandomNumber(10) + 5;
  return randomLength;
};

const getRandomStartNum = () => {
  const randomStartNum = generateRandomNumber(10);
  return randomStartNum;
};

const getStepProgression = () => {
  const stepProgression = generateRandomNumber(5) + 1;
  return stepProgression;
};

const getArithmeticProgression = (len, start, step) => {
  const progression = [];
  let start1 = start;
  for (let i = 0; i <= len; i += 1) {
    start1 += step;
    progression.push(start1);
  }
  const progLength = progression.length;
  const position = generateRandomNumber(progLength);
  const selectedNumber = progression[position];
  progression[position] = '..';
  return [selectedNumber, progression];
};

const game = () => {
  const userName = welcomeGames();
  gameRules();
  for (let i = 0; i < 3; i += 1) {
    const randLen = getRandomLength();
    const randStart = getRandomStartNum();
    const stepProg = getStepProgression();
    // console.log(randLen, randStart, stepProg);
    const res = getArithmeticProgression(randLen, randStart, stepProg);
    console.log(`Question: ${res[1].join(' ')}`);
    const correctAnswer = res[0].toString();
    const answer = getUserAnswer();
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
