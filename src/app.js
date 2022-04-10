require('dotenv').config();
const express = require('express');

const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const ProductoRoutes = require('./routes/productos');
app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion } = require('mongodb');

mongoose
  .connect(
    'mongodb+srv://douglascg:vAhPeKoU69E!02B5d8@cluster0.2otcl.mongodb.net/parcial?retryWrites=true&w=majority',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log(' db is connected');
  })
  .catch((err) => {
    console.log(err.message);
  });
const connection = async () => {
  const uri =
    'mongodb+srv://douglascg:vAhPeKoU69E!02B5d8@cluster0.2otcl.mongodb.net/parcial?retryWrites=true&w=majority';
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  client
    .connect()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
//connection();

app.set('PORT', process.env.port || 3000);

app.use('/api/productos', ProductoRoutes);
app.get('/', (_, res) => {
  res.json('OK');
});
//app.use('/api/users', UserRoutes);
module.exports = app;
