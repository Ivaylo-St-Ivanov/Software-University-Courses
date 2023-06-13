const express = require('express');

const expressConfig = require('./config/expressConfig');
const routes = require('./routes');

const PORT = 3000;

const app = express();

expressConfig(app);

app.use(routes);

app.listen(PORT, () => console.log(`This server is running on port ${PORT}...`));