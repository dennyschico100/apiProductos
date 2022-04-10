const { Schema, model } = require('mongoose');

const productoSchema = new Schema({
  nombre: { type: String },
  precio: { type: Number },

  existencias: { type: Number },
  deleted: { type: Boolean, default: false },
});

/*userSchema.statics.comparePassword = async (password, receivedPassword) => {
  const valid_password = await bcrypt.compare(password, receivedPassword);
  return valid_password;
};*/

const ProductoModel = model('Productos', productoSchema);
module.exports = ProductoModel;

ProductoModel.generate = async ({ nombre, precio, existencias }) => {
  try {
    let prod;

    prod = new ProductoModel();
    prod.nombre = nombre;
    prod.precio = precio;
    prod.existencias = existencias;

    prod = await prod.save();
    return prod;
  } catch (error) {
    console.log(`[producto - generate ] JSON.stringify(err)`);
    throw error;
  }
};
