const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        unique: true,
        minLength: [5, 'Username must be at least five characters long!']
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        minLength: [10, 'Email must be at least ten characters long!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [4, 'Password must be at least four characters long!']
    }
});

userSchema.virtual('repeatPassword')
    .set(function(value) {
        if (this.password != value) {
            throw new Error('Password mismatch!');
        }
    });

userSchema.pre('save', async function() {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;