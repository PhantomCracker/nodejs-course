const fs = require('fs');

const book = {
    title: 'Art of Manipulation',
    author: 'Kevin Dutton'
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const parsedBook = JSON.parse(bookJSON);
console.log(parsedBook.title);