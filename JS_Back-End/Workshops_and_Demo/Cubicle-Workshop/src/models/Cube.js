const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    level: Number
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;