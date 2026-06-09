// MODEL — define o formato/estrutura de uma tarefa
// é o "molde" do objeto que circula pela aplicação
class Tarefa {
    constructor(id, titulo, descricao, status) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
    }
}

// Factory — jeito alternativo de criar uma Tarefa sem usar o "new" direto
function criarTarefa(id, titulo, descricao, status) {
    return new Tarefa(id, titulo, descricao, status);
}

module.exports = { Tarefa, criarTarefa };
