import readlineSync from 'readline-sync';

const welcome = () => {
  const welcomeCons = console.log('Welcome to the Brain Games!');
  return welcomeCons;
};

const greeting = () => {
  welcome();
  const userName = readlineSync.question('May I heve you name? ');
  return console.log(`Hi, ${userName}!`);
};

export default greeting;
