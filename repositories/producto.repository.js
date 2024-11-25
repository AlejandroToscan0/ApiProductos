const db = require('../config/db');

class ProductoRepository {
  async obtenerTodas() {
    const [productos] = await db.query('SELECT * FROM producto');
    return productos;
  }

  async crear(producto) {
    const [resultado] = await db.query('INSERT INTO producto SET ?', producto);
    return resultado.insertId;
  }

  async obtenerPorId(id) {
    const [producto] = await db.query('SELECT * FROM producto WHERE id = ?', [id]);
    return producto[0];
  }

  async actualizar(id, datos) {
    await db.query('UPDATE producto SET ? WHERE id = ?', [datos, id]);
  }

  async eliminar(id) {
    await db.query('DELETE FROM producto WHERE id = ?', [id]);
  }
}

module.exports = new ProductoRepository();
