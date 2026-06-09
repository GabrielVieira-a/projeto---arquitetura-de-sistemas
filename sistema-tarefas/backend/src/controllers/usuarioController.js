// CONTROLLER — porta de entrada da API pra usuários
// recebe a requisição HTTP, chama o service e devolve a resposta
// não tem lógica de negócio aqui, só repassa e trata erro
const usuarioService = require('../services/usuarioService');

// POST /usuarios — cria um novo usuário com os dados do body
exports.criar = async (req, res) => {
    try {
        const usuario = await usuarioService.criar(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

// GET /usuarios — retorna todos os usuários
exports.listar = async (req, res) => {
    try {
        const usuarios = await usuarioService.listar();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

// PUT /usuarios/:id — atualiza um usuário pelo id que vem na URL
exports.atualizar = async (req, res) => {
    try {
        const usuario = await usuarioService.atualizar(req.params.id, req.body);
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

// DELETE /usuarios/:id — remove um usuário pelo id
exports.deletar = async (req, res) => {
    try {
        await usuarioService.deletar(req.params.id);
        res.json({ mensagem: 'Removido com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};
