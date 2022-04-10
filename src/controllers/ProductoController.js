const { default: mongoose } = require('mongoose');
const ProductoModel = require('../models/Producto');

module.exports.create = async (_prod) => {
  try {
    console.log(_prod);
    const res = await ProductoModel.generate(_prod);
    return res;
  } catch (error) {
    console.log(error);
  }
};

module.exports.buscar = async (prodId) => {
  try {
    console.log(prodId);
    const resp = await ProductoModel.find({
      _id: mongoose.Types.ObjectId(prodId),
    });
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
  }
};
module.exports.buscarTodos = async () => {
  try {
    const query = { deleted: false };
    const res = await ProductoModel.find(query);

    return res;
  } catch (error) {
    console.log(error);
  }
};
