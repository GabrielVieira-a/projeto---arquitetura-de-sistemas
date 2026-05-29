const usuarioRepository = require("../repositories/usuarioRepository");

const { criarUsuario } = require("../models/usuario");

let id = 1;

exports.criar = (dados) => {

    const usuario = criarUsuario(
        id++,
        dados.nome,
        dados.email
    );

    return usuarioRepository.salvar(usuario);
};

exports.listar = () => {

    return usuarioRepository.listar();
};

exports.atualizar = (id, dados) => {

    return usuarioRepository.atualizar(id, dados);
};

exports.deletar = (id) => {

    usuarioRepository.deletar(id);
};