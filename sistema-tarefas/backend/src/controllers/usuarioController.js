const usuarioService = require("../services/usuarioService");

exports.criar = (req, res) => {

    const usuario = usuarioService.criar(req.body);

    res.json(usuario);
};

exports.listar = (req, res) => {

    res.json(usuarioService.listar());
};

exports.atualizar = (req, res) => {

    const usuario = usuarioService.atualizar(
        req.params.id,
        req.body
    );

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).send("Não encontrado");
    }
};

exports.deletar = (req, res) => {

    usuarioService.deletar(req.params.id);

    res.send("Removido");
};