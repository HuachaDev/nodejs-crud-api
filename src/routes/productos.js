const express = require('express');
const { Producto } = require('../models/producto');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
});


router.post('/', async (req, res) => {
    try {
        const { nombre, descripcion, precio, cantidad_stock } = req.body;
        const producto = await Producto.create({ nombre, descripcion, precio, cantidad_stock });
        res.status(201).json(producto);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el producto' });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (producto) {
            res.json(producto);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const { nombre, descripcion, precio, descuento_stock } = req.body;
        const producto = await Producto.findByPk(req.params.id);

        if (producto) {
            if (typeof descuento_stock == 'number') {
                const nuevoStock = producto.cantidad_stock - descuento_stock;
                if (nuevoStock < 0) {
                    return res.status(400).json({ error: 'No hay suficiente stock disponible.' });
                }

                await producto.update({ nombre, descripcion, precio, cantidad_stock: nuevoStock });
            } else {
                await producto.update({ nombre, descripcion, precio, cantidad_stock: producto.cantidad_stock });
            }

            const updatedAt = new Date(producto.updated_at);
            const formattedDate = `${updatedAt.getDate()}-${updatedAt.getMonth() + 1}-${updatedAt.getFullYear()}`;

            const productoActualizado = {
                nombre: producto.nombre,
                stock: producto.cantidad_stock,
                actualizado: formattedDate
            };

            res.json(productoActualizado);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el producto' });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (producto) {
            await producto.destroy();
            res.json({ message: `Producto '${producto.nombre}' eliminado con éxito.` });
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
});

module.exports = router;
