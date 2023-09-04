// src/index.js
const inquirer = require('inquirer');
const generateLogo = require ('./generateLogo.js');

async function main() {
  const questions = [
    {
      type: 'input',
      name: 'characters',
      message: 'Enter up to 3 characters:',
      validate: (input) => {
        if (input.length <= 3) {
          return true;
        }
        return 'Please enter up to 3 characters.';
      },
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape (square, circle, or triangle):',
      choices: ['square', 'circle', 'triangle'],
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter a color keyword or hexadecimal number:',
    },
  ];

  const answers = await inquirer.prompt(questions);

  generateLogo(answers.characters, answers.shape, answers.color);
}

main();

