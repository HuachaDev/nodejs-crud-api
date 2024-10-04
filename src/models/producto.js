const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('productManagement', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Producto = sequelize.define('Producto', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    cantidad_stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'productos',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = { Producto, sequelize };
