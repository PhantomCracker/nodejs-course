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

const address = process.argv[2];
if(!address) {
    console.log("Provide a location");
}

else {
    geocode(address, (error, data) => {
        if(error) {
            return console.log(error);
        }
        else {
            forecast(data.longitude, data.latitude, (error, forecastData) => {
                if(error) {
                    return console.log(error);
                }
                else {
                    console.log(data.location);
                    console.log("The location is " + forecastData.location + " and the country is " + forecastData.country + "; also the region is " + forecastData.region);
                }
            });
        }
    });
}