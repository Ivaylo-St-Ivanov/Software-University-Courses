const express = require('express');
const hbr = require('express-handlebars');

const homeController = require('./controllers/homeController')
const catalogController = require('./controllers/catalogController');

const handlebars = hbr.create({
    extname: '.hbs'
});

const app = express();

app.use(express.static('public'));

app.engine('hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.use(homeController);

app.get('/cats/add-breed', (req, res) => {
    res.render('addBreed');
});

app.get('/cats/add-cat', (req, res) => {
    res.render('addCat');
});

app.use('/catalog', catalogController);

app.listen(5000, () => console.log('This server is running on port 5000...'));