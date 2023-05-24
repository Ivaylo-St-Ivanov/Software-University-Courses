const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');

const homeController = require('./controllers/homeController');

const PORT = 3000;

const app = express();

expressConfig(app);
handlebarsConfig(app);

app.use(homeController);
app.use('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => console.log(`This server is running on port ${PORT}...`));