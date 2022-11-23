import readlineSync from 'readline-sync';

export const greeting = () => {
    let userName = readlineSync.question('May I heve you name? ');

    console.log(`Hi, ${userName}!`);
    return 0;
};