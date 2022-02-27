const router = require('express').Router();
const path = require('path');

router.get('/carta', (req, res) => {
    return res.sendFile(path.join(__dirname, '../public/carta.html'));
});

module.exports = router;