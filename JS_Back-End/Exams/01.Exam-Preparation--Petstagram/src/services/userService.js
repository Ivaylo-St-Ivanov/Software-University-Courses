const User = require('../models/User');

exports.register = async (userData) => {
    const user = await User.findOne({ username: userData.username });

    if (user) {
        throw new Error('Username already exists');
    }

    return User.create(userData);
};