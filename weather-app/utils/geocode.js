const request = require('request');

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoicGhhbnRvbWNyYWNrZXIiLCJhIjoiY2tkNXU5cnF2MjN4ZjJ5bzc2cnIxajI4ayJ9.nN7q1Ovsgaud_4ab8udpJg";
    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback("Unable to access the GeoLocation service", undefined);
        } else if(response.body.features.length === 0) {
            callback("Unable to read the location. Try another search", undefined);
        }
        else {
            callback(undefined, {
                longitude: response.body.features[0].center[1],
                latitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name,
                body: response.body
            });
        }
    });
};

module.exports = geocode;