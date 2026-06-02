require('dotenv').config();

const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const tarefaRoutes = require('./src/routes/tarefaRoutes');

const usuarioRoutes = require('./src/routes/usuarioRoutes');

app.use('/tarefas', tarefaRoutes);

app.use('/usuarios', usuarioRoutes);

if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}

module.exports = app;
