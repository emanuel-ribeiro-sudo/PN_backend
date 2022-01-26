const express = require('express');
const MultasController = require('./controllers/multaControllers')
const router = express.Router();

router.get('/multa/:carro/multas', MultasController.index);
router.post('/multa', MultasController.index1);

module.exports = router;