const express = require('express');
const hbr = require('express-handlebars');

const homeController = require('./controllers/homeController')
const createController = require('./controllers/createController');
const deleteController = require('./controllers/deleteController');

const handlebars = hbr.create({
    extname: '.hbs'
});

const app = express();

app.engine('hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));

app.use(homeController);
app.use('/cats', homeController);
app.use('/cats', createController);
app.use('/cats', deleteController);

app.listen(5000, () => console.log('This server is running on port 5000...'));