const routs = {};

function register(method, path, handler) {
    if (routs[path] == undefined) {
        routs[path] = {};
    }
    routs[path][method] = handler;
}

function match(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);

    let handler;
    const actions = routs[url.pathname];
    if (actions != undefined) {
        handler = actions[req.method];
    }

    if (typeof handler == 'function') {
        handler(req, res);
    } else {
        routs.default['GET'](req, res);
    }
}

module.exports = {
    register,
    get: register.bind(null, 'GET'),
    post: register.bind(null, 'POST'),
    match
};