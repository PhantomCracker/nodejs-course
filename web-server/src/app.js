const path = require('path');
const express = require('express');
const hbs  = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
const partialsPath = path.join(__dirname, '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));
hbs.registerPartials(partialsPath);

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'PhantomCracker',
        defaultLayout: null
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'PhantomCracker'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        name: "PhantomCracker"
    });
});

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: "No addres provided"
        });
    }

    geocode(req.query.address, (error, { longitude, latitude, location } = {}) => {
        if(error) {
            return res.send({
                error: error
            });
        }
        else {
            forecast(longitude, latitude, (error, { location: forecastLocation, country, region}) => {
                if(error) {
                    return res.send({
                        error: error
                    });
                }
                else {
                    return res.send({
                        location: location,
                        forecast: "The location is " + forecastLocation + " and the country is " + country + "; also the region is " + region
                    });
                }
            });
        }
    });
});

app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: "You must provide a search term"
        });
    }
    res.send({
        products: []
    });
});

app.get('/help/*', (req, res) => {
    res.render("404", {
        title: "Error 404",
        name: "PhantomCracker",
        description: "This HELP page has not been found"
    });
});

app.get('*', (req, res) => {
    res.render("404", {
        title: "Error 404",
        name: "PhantomCracker",
        description: "The API url has not been found"
    });
});

app.listen(3000, () => {
    console.log("Server is up on port 3000");
});