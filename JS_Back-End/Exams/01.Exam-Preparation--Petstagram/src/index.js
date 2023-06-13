const express = require('express');

const expressConfig = require('./config/expressConfig');

const PORT = 3000;

const app = express();

expressConfig(app);

app.get('/', (req, res) => {
    res.send('Test');
});

app.listen(PORT, () => console.log(`This server is running on port ${PORT}...`));