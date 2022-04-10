const router = require('express').Router();
const ProductoController = require('../controllers/ProductoController');
const ProductoModel = require('../models/Producto');
router.post('/', async (req, res) => {
  try {
    const producto = {
      nombre: req.body.nombre,
      precio: req.body.precio,
      existencias: req.body.existencias,
    };
    const resp = ProductoController.create(producto);
    res.send('producto guardado');
  } catch (error) {
    res.send('ocurrio un error' + error);
  }
});

router.get('/:productID', async (req, res) => {
  try {
    console.log(req.query);
    const _id = req.params.productID;
    const data = await ProductoController.buscar(_id);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const query = { deleted: false };
    const resp = await ProductoModel.find(query);

    res.send(resp);
  } catch (error) {}
});

module.exports = router;
