const { layoutTemplate } = require('../util');

const page404 = (req, res) => {
    res.write(layoutTemplate(`
    <h1>404 Not Found</h1>
    <p>The resource you requested cannot be found</p>`));
    res.end();
};

module.exports = {
    page404
};
