const usuarioRepository = require('../repositories/usuarioRepository');

exports.criar = async (dados) => {
    return usuarioRepository.salvar({ nome: dados.nome, email: dados.email });
};

exports.listar = async () => {
    return usuarioRepository.listar();
};

exports.atualizar = async (id, dados) => {
    return usuarioRepository.atualizar(id, { nome: dados.nome, email: dados.email });
};

exports.deletar = async (id) => {
    return usuarioRepository.deletar(id);
};
