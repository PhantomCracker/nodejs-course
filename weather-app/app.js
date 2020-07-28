// console.log("Starting");
//
// setTimeout(() => {
//     console.log("2 seconds timer");
// }, 2000);
//
// setTimeout(() => {
//     console.log("0 seconds timer");
// }, 0);
//
// console.log("Stopping");

const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode("Bucharest", (error, data) => {
    console.log("Error: ", error);
    console.log("Data: ", data);
});

forecast(44.439663, 26.096306, (error, data) => {
    console.log("Error: ", error);
    console.log("Data: ", data);
});