import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I heve you name? ');
  return console.log(`Hi, ${userName}!`);
};

export default greeting;
