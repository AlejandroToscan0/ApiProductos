const ProductoService = require('../services/producto.services');

class productoController {
  
  async obtenerTodas(req, res) {
    const reservas = await ProductoService.obtenerTodas();
    res.json(reservas);
  }

  async crear(req, res) {
    const nuevoProducto = req.body;
    const id = await ProductoService.crear(nuevoProducto);
    res.status(201).json({ id, ...nuevoProducto });
  }

  async obtenerPorId(req, res) {
    const producto = await ProductoService.obtenerPorId(req.params.id);
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json(producto);
  }

  async actualizar(req, res) {
    await ProductoService.actualizar(req.params.id, req.body);
    res.json({ mensaje: 'Producto actualizada' });
  }

  async eliminar(req, res) {
    await ProductoService.eliminar(req.params.id);
    res.json({ mensaje: 'Producto eliminada' });
  }
}

module.exports = new productoController();
