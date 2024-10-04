const express = require('express');
const productosRoutes = require('./routes/productos');

const app = express();
app.use(express.json());

app.use('/productos', productosRoutes);

module.exports = app;
