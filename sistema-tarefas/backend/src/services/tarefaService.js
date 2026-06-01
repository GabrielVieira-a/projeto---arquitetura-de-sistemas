const tarefaRepository = require('../repositories/tarefaRepository');

exports.criar = async (dados) => {
    return tarefaRepository.salvar({
        titulo: dados.titulo,
        descricao: dados.descricao,
        status: dados.status || 'pendente'
    });
};

exports.listar = async () => {
    return tarefaRepository.listar();
};

exports.atualizar = async (id, dados) => {
    return tarefaRepository.atualizar(id, {
        titulo: dados.titulo,
        descricao: dados.descricao,
        status: dados.status
    });
};

exports.deletar = async (id) => {
    return tarefaRepository.deletar(id);
};
