const ProductoRepository = require('../repositories/producto.repository');

class ProductoService {
  async obtenerTodas() {
    return await ProductoRepository.obtenerTodas();
  }

  async crear(producto) {
    return await ProductoRepository.crear(producto);
  }

  async obtenerPorId(id) {
    return await ProductoRepository.obtenerPorId(id);
  }

  async actualizar(id, datos) {
    return await ProductoRepository.actualizar(id, datos);
  }

  async eliminar(id) {
    return await ProductoRepository.eliminar(id);
  }
}

module.exports = new ProductoService();
