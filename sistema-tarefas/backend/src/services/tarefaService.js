// SERVICE — camada de regras de negócio pra tarefas
// fica entre o controller e o repository
// é aqui que você colocaria validações, regras, transformações nos dados
const tarefaRepository = require('../repositories/tarefaRepository');

// monta o objeto antes de salvar — note o status padrão 'pendente' se não vier nenhum
exports.criar = async (dados) => {
    return tarefaRepository.salvar({
        titulo: dados.titulo,
        descricao: dados.descricao,
        status: dados.status || 'pendente'
    });
};

// sem lógica extra aqui, só repassa pro repository
exports.listar = async () => {
    return tarefaRepository.listar();
};

// filtra só os campos que podem ser atualizados
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
