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

const url = "http://api.weatherstack.com/current?access_key=81f93c4a636704c35c4f8c3dfbb12ae0&query=37.8267,-122.4233";

request({ url: url }, (error, response)  => {
    // console.log(response);
    const data = JSON.parse(response.body);
    console.log(data.current);
});