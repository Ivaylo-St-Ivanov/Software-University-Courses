const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const dbConnect = require('./config/dbConfig');

const routes = require('./routes');

const PORT = 3000;

const app = express();

expressConfig(app);
handlebarsConfig(app);
dbConnect()
    .then(() => console.log('Database connect successfully.'))
    .catch(err => console.log('Database error', err));

app.use(routes);

app.listen(PORT, () => console.log(`This server is running on port ${PORT}...`));