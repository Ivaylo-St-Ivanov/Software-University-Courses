const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');

const cubeController = require('./controllers/cubeController');

const PORT = 3000;

const app = express();

expressConfig(app);
handlebarsConfig(app);

app.use(cubeController);
app.use('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => console.log(`This server is running on port ${PORT}...`));