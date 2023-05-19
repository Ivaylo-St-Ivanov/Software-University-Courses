const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Catalog Page');
});

module.exports = router;