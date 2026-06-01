const tarefaService = require('../services/tarefaService');

exports.criar = async (req, res) => {
    try {
        const tarefa = await tarefaService.criar(req.body);
        res.status(201).json(tarefa);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

exports.listar = async (req, res) => {
    try {
        const tarefas = await tarefaService.listar();
        res.json(tarefas);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

exports.atualizar = async (req, res) => {
    try {
        const tarefa = await tarefaService.atualizar(req.params.id, req.body);
        res.json(tarefa);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

exports.deletar = async (req, res) => {
    try {
        await tarefaService.deletar(req.params.id);
        res.json({ mensagem: 'Removida com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};
