const express = require('express');
const router = express.Router();

// Importar módulo propio
const apiController = require('../controllers/apiController');

// Creación de rutas
router.get('/', apiController.index);

module.exports = router;