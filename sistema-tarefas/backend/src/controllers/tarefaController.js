// CONTROLLER — porta de entrada da API pra tarefas
// recebe a requisição HTTP, chama o service e devolve a resposta
// não tem lógica de negócio aqui, só repassa e trata erro
const tarefaService = require('../services/tarefaService');

// POST /tarefas — cria uma nova tarefa com os dados do body
exports.criar = async (req, res) => {
    try {
        const tarefa = await tarefaService.criar(req.body);
        res.status(201).json(tarefa);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

// GET /tarefas — retorna todas as tarefas
exports.listar = async (req, res) => {
    try {
        const tarefas = await tarefaService.listar();
        res.json(tarefas);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

// PUT /tarefas/:id — atualiza uma tarefa pelo id que vem na URL
exports.atualizar = async (req, res) => {
    try {
        const tarefa = await tarefaService.atualizar(req.params.id, req.body);
        res.json(tarefa);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

// DELETE /tarefas/:id — remove uma tarefa pelo id
exports.deletar = async (req, res) => {
    try {
        await tarefaService.deletar(req.params.id);
        res.json({ mensagem: 'Removida com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};
