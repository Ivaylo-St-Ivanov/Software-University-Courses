const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    platform: {
        type: String,
        enum: {
            values: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'],
            message: 'Not supported platform!'
        }
    },
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [4, 'Name must be at least four characters long!']
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        match: [/^https?:\/\//, 'Invalid url!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [0, 'Price cannot be negative number!']
    },
    genre: {
        type: String,
        required: [true, 'Genre is required!'],
        minLength: [2, 'Genre must be at least two characters long!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'Description must be at least ten characters long!']
    },
    boughtBy: [
        {
            user: {
                type: mongoose.Types.ObjectId,
                required: true,
                ref: 'User'
            }
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;