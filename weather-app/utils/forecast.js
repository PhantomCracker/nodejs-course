const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=81f93c4a636704c35c4f8c3dfbb12ae0&query=" + encodeURIComponent(longitude) + "," + encodeURIComponent(latitude);

    request({ url: url, json: true }, (error, response)  => {

        if(error) {
            callback("Unable to access the weather service", undefined);
        }
        else if(response.body.error) {
            callback("Unable to read the location. Please submit it again correctly!", undefined);
        }
        else {
            callback(undefined, {
                location: response.body.location.name,
                country: response.body.location.country,
                region: response.body.location.region,
            });
        }
    });
};

module.exports = forecast;