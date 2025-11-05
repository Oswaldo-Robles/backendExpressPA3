const express = require('express');
const router = express.Router();

// Importar módulo propio
const apiController = require('../controllers/apiController');

// Creación de rutas
router.get('/', apiController.index);


router.get('/api/pizza/pizzaLista', apiController.pizzaList);
router.get('/api/pizza/detallePizza/:id', apiController.detallePizza);

module.exports = router;