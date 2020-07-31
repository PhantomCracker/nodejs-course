const path = require('path');
const express = require('express');
const hbs  = require('hbs');

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
    res.send({
        forecast: '30 degrees',
        location: 'Bucharest'
    });
});

app.listen(3000, () => {
    console.log("Server is up on port 3000");
});