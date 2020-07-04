const validator = require('validator');
const fs = require('fs');
const notes = require('./notes');
const chalk = require('chalk');

fs.writeFileSync('notes.txt', 'I have started the node Course.\n');
fs.appendFileSync('notes.txt', 'And this is an append.');

let myNotes = notes();
console.log(myNotes);

let greenMessage = chalk.green("Success");
console.log(greenMessage);