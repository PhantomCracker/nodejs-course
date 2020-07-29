const http = require('http');
const url = "http://api.weatherstack.com/current?access_key=81f93c4a636704c35c4f8c3dfbb12ae0&query=&units=m";

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });
    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
});

request.on('error', (error) => {
    console.log("An error!", error);
});

request.end();