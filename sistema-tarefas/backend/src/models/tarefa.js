class Tarefa {
    constructor(id, titulo, descricao, status) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
    }
}

// Factory
function criarTarefa(id, titulo, descricao, status) {
    return new Tarefa(id, titulo, descricao, status);
}

module.exports = { Tarefa, criarTarefa };