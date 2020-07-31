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
    geocode(address, (error, { longitude, latitude, location } = {}) => {
        if(error) {
            return console.log(error);
        }
        else {
            forecast(longitude, latitude, (error, { location: forecastLocation, country, region}) => {
                if(error) {
                    return console.log(error);
                }
                else {
                    console.log(location);
                    console.log("The location is " + forecastLocation + " and the country is " + country + "; also the region is " + region);
                }
            });
        }
    });
}