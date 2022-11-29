import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('May I heve you name? ');
  return console.log(`Hi, ${userName}!`);
};

export default greeting;
