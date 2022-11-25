import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have you name? ');
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

export const isRigthAswer = (answer, even) => {
  if (answer === even) {
    return true;
  }
  return false;
};

export const generateRandomNumber = (n) => {
  const randomNumber = Math.floor(Math.random() * n);
  return randomNumber;
};

const basisOfGames = (noteToGame, task) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // Вывод на экран адание (в чём суть игры)
  console.log(noteToGame);

  // Начало цикла игры
  for (let i = 0; i < 3; i += 1) {
    const pairOfQuestionAndResult = task();
    console.log('Question: ', pairOfQuestionAndResult[0]);
    const answerUser = readlineSync.question('Your answer: ');

    // Константа для правильного ответа
    const rightAnswer = pairOfQuestionAndResult[1];

    // Проверка
    if (answerUser === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default basisOfGames;
