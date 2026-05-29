const db = require("../database/singleton");

class TarefaRepository {

    listar() {
        return db.tarefas;
    }

    salvar(tarefa) {

        db.tarefas.push(tarefa);

        return tarefa;
    }

    atualizar(id, dados) {

        const tarefa = db.tarefas.find(
            t => t.id == id
        );

        if (tarefa) {

            tarefa.titulo = dados.titulo;
            tarefa.descricao = dados.descricao;
            tarefa.status = dados.status;
        }

        return tarefa;
    }

    deletar(id) {

        db.tarefas = db.tarefas.filter(
            t => t.id != id
        );
    }
}

module.exports = new TarefaRepository();