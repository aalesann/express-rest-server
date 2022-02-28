const router = require('express').Router();
const path = require('path');
const Visits = require('../models/Visits');

router.get('/carta', async (req, res) => {
    return res.sendFile(path.join(__dirname, '../public/carta.html'));
});

router.get('/sock', (req, res) =>{
    try {
        await Visits.updateOne({ name: 'exxim'}, {$inc: { visits: 1}});
    } catch (error) {
        console.error('Error al incrementar: ', error)
    }

    return res.send('a');
});

module.exports = router;