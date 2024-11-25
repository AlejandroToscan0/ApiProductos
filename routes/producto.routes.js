const express = require('express');
const ProductoController = require('../controllers/producto.controller');
const router = express.Router();

router.get('/', ProductoController.obtenerTodas);
router.post('/', ProductoController.crear); // Debe existir esta ruta
router.get('/:id', ProductoController.obtenerPorId);
router.put('/:id', ProductoController.actualizar);
router.delete('/:id', ProductoController.eliminar);

module.exports = router;
