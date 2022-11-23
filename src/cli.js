import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('May I heve you name? ');
  console.log(`Hi, ${userName}!`);
  return 0;
};

export default greeting;
