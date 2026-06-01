const usuarioService = require('../services/usuarioService');

exports.criar = async (req, res) => {
    try {
        const usuario = await usuarioService.criar(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

exports.listar = async (req, res) => {
    try {
        const usuarios = await usuarioService.listar();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

exports.atualizar = async (req, res) => {
    try {
        const usuario = await usuarioService.atualizar(req.params.id, req.body);
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

exports.deletar = async (req, res) => {
    try {
        await usuarioService.deletar(req.params.id);
        res.json({ mensagem: 'Removido com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};
