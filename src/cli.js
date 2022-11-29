import readlineSync from 'readline-sync';

export const welcome = () => {
  const welcomeCons = console.log('Welcome to the Brain Games!');
  return welcomeCons;
};

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${userName}!`);
};

export default greeting;
