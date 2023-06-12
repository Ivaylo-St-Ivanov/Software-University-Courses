const { MongooseError, Error } = require('mongoose');

exports.extractErrorMessages = (error) => {
    if (error instanceof MongooseError) {
        // return Object.values(err.errors)[0].message;            --> Only first error
        return Object.values(error.errors).map(x => x.message);
    } else if (error) {
        return [error.message];
    }
};