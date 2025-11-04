const express = require('express');
const router = express.Router();

// Importar módulo propio
const apiController = require('../controllers/apiController');

// Creación de rutas
router.get('/', apiController.index);



router.get('/pizzaLista', apiController.pizzaList);

router.get('/detallePizza/:id', apiController.detallePizza);

module.exports = router;