const fs = require('fs');

// const book = {
//     title: 'Art of Manipulation',
//     author: 'Kevin Dutton'
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedBook = JSON.parse(bookJSON);
// console.log(parsedBook.title);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);
// console.log(data.author);

const buffer = fs.readFileSync('1-json.json').toString();
const data = JSON.parse(buffer);
data.name = "PhantomCracker";
data.age = 34;
console.log(data.name);

const newData = JSON.stringify(data);
fs.writeFileSync('1-json.json', newData);