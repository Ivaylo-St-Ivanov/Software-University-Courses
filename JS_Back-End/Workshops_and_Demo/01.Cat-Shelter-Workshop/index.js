const http = require('http');

const router = require('./router');

const { homePage } = require('./views/homePage');
const { addBreed } = require('./views/addBreed');
const { addCat } = require('./views/addCat');
const { catShelter } = require('./views/catShelter');
const { editCat } = require('./views/editCat');
const { page404 } = require('./views/page404');

router.register('/', homePage);
router.register('/cats/add-breed', addBreed);
router.register('/cats/add-cat', addCat);
// router.register('', catShelter);
// router.register('', editCat);
router.register('page404', page404);

const server = http.createServer((req, res) => {
    router.match(req, res);
});

server.listen(5000);