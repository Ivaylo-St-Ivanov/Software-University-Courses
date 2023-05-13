const routes = {};

const register = (path, handler) => {
    routes[path] = handler;
};

const match = (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const handler = routes[url.pathname];

    if (typeof handler == 'function') {
        handler(req, res);
    } else {
        routes.page404(req, res);
    }
};

module.exports = {
    register,
    match
}