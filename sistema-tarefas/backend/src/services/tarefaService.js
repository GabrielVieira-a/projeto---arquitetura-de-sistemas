const tarefaRepository = require("../repositories/tarefaRepository");

const { criarTarefa } = require("../models/tarefa");

exports.criar = (dados) => {

    const tarefa = criarTarefa(
        Date.now(),
        dados.titulo,
        dados.descricao,
        dados.status
    );

    return tarefaRepository.salvar(tarefa);
};

exports.listar = () => {

    return tarefaRepository.listar();
};

exports.atualizar = (id, dados) => {

    return tarefaRepository.atualizar(id, dados);
};

exports.deletar = (id) => {

    tarefaRepository.deletar(id);
};