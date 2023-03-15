const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let result = "";

rl.question('What\'s your name? ', (answer1) => {
  console.log(`Hello, ${answer1.trim()}`);
  rl.question('What\'s your favourite activity? ', (answer2) => {
    console.log(`${answer2} sounds cool!`);
    rl.question('What do you like doing while doing that? ', (answer3) => {
      console.log(`${answer3}...interesting...`);
      rl.question('Which meal is your favourite? ', (answer4) => {
        console.log(`${answer4}? Really!?`);
        rl.question(`What\'s your favourite thing to eat during ${answer4}? `, (answer5) => {
          console.log(`That sounds delicious!`)
        result += `${answer1.trim()} `;
        result += `loves ${answer2.trim()}`;
        result += ` while ${answer3.trim()},`;
        result += ` and devouring ${answer5.trim()} for `;
        result += `${answer4.trim()}.`;
        console.log(result);
        rl.close();
        });
      });
    });
  });
});

console.log(result);