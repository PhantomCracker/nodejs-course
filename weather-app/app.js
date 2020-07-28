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

const url = "http://api.weatherstack.com/current?access_key=81f93c4a636704c35c4f8c3dfbb12ae0&query=44.439663,26.096306";

request({ url: url, json: true }, (error, response)  => {
    // console.log(response);
    // const data = JSON.parse(response.body);
    // console.log(data.current);
    // console.log(response.body.current);

    if(error) {
        console.log("Unable to access the weather service");
    }
    else if(response.body.error) {
        console.log("Unable to read the location. Please submit it again correctly!");
    }
    else {
        console.log(response.body.current.weather_descriptions[0] + ". The actual temperature is " + response.body.current.temperature + " but it feels like " + response.body.current.feelslike);
    }
});

const geolocationUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Bucharest.json?access_token=pk.eyJ1IjoicGhhbnRvbWNyYWNrZXIiLCJhIjoiY2tkNXU5cnF2MjN4ZjJ5bzc2cnIxajI4ayJ9.nN7q1Ovsgaud_4ab8udpJg";
request({ url: geolocationUrl, json: true }, (error, response) => {
    if(error) {
        console.log("Unable to access the GeoLocation service");
    }
    else if(response.body.features.length === 0) {
        console.log("Unable to read the location");
    }
    else {
        const longitude = response.body.features[0].center[1];
        const latitude = response.body.features[0].center[0];
        console.log("Longitude: ", longitude);
        console.log("Latitude: ", latitude);
    }
});