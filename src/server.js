const app = require('./app');
const { sequelize } = require('./models/producto');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await sequelize.sync();
        console.log('Conectado a la base de datos y sincronizados los modelos');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err);
    }
};

startServer();
