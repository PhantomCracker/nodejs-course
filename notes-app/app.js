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
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// Create edit command
yargs.command({
    command: 'read',
    description: 'Read a note',
    builder: {
        title: {
            describe: 'Read a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

// Creating list command
yargs.command({
    command: 'list',
    description: 'Listing all the notes',
    handler() {
        notes.listNotes();
    }
})

// console.log(yargs.argv);
yargs.parse();