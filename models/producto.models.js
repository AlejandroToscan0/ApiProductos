class Producto {
    constructor(id, tipo, nombre_producto, costo, caracteristicas, marca, creado_en) {
      this.id = id;
      this.tipo = tipo;
      this.nombre_producto = nombre_producto;
      this.costo = costo;
      this.caracteristicas = caracteristicas;
      this.creado_en = creado_en;
    }
  }
  
  module.exports = Producto;
  