import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const printGreetingStart = () => {
  console.log('Welcome to the Brain Games!');
  // const greeting = `Hi ${name}!`;
  return 0;
};

const printGreetingName = (userName) => {
  console.log(`Hi, ${userName}!`);
  return 0;
};

export const welcomeGames = () => {
  printGreetingStart();
  const userName = getUserName();
  printGreetingName(userName);
  return userName;
};

// welcomeGames();
export const getUserAnswer = () => {
  const userAnswer = readlineSync.question('You answer: ');
  return userAnswer;
};

export const isRigthAswer = (answer, result) => {
  if (answer === result) {
    return true;
  }
  return false;
};

export const generateRandomNumber = (n) => {
  const randomNumber = Math.floor(Math.random() * n);
  return randomNumber;
};
