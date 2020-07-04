const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your notes...";
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title !== title);
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added"));
    }
    else {
        console.log(chalk.red.inverse("This title is already used for another note"));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesAfterDelete = notes.filter((note) => note.title !== title);
    saveNotes(notesAfterDelete);
    if(notes.length > notesAfterDelete.length) {
        console.log(chalk.green.inverse("Note has been removed"));
    }
    else {
        console.log(chalk.red.inverse("No note found with this title"));
    }
};

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach((note) => {
        console.log(chalk.green(note.title));
    })
};

const readNote = (title) => {
    const notes = loadNotes();
    const toReadNote = notes.find((note) => note.title === title);
    if(toReadNote) {
        console.log(chalk.green(toReadNote.title) + " " + toReadNote.body);
    }
    else {
        console.log(chalk.red("No note found with this title"))
    }
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json').toString();
        return JSON.parse(dataBuffer);
    }
    catch (e) {
        // console.log(e);
        return [];
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};