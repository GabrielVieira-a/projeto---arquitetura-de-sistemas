const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const tarefaRoutes = require('./src/routes/tarefaRoutes');

const usuarioRoutes = require('./src/routes/usuarioRoutes');

app.use('/tarefas', tarefaRoutes);

app.use('/usuarios', usuarioRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});