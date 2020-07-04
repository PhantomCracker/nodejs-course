const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');

// const command = process.argv[2];
// if(command === 'add') {
//     console.log("Adding note!");
// }
// else if(command === 'remove') {
//     console.log("Removing note!");
// }
// else {
//     console.log("node app.js add/remove");
// }

// Create add command
yargs.command({
    command: 'add',
    description: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log("Title: " + argv.title);
        console.log("Content: " + argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    description: 'Remove a note',
    handler: function () {
        console.log("Removing the note");
    }
});

// Create edit command
yargs.command({
    command: 'edit',
    description: 'Edit a note',
    handler: function () {
        console.log("Editing a note");
    }
});

// Creating list command
yargs.command({
    command: 'list',
    description: 'Listing all the notes',
    handler: function () {
        console.log("All the notes are: ");
    }
})

// console.log(yargs.argv);
yargs.parse();