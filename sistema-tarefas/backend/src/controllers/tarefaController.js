const tarefaService = require("../services/tarefaService");

exports.criar = (req, res) => {

    const tarefa = tarefaService.criar(req.body);

    res.json(tarefa);
};

exports.listar = (req, res) => {

    res.json(tarefaService.listar());
};

exports.atualizar = (req, res) => {

    const tarefa = tarefaService.atualizar(
        req.params.id,
        req.body
    );

    if (tarefa) {

        res.json(tarefa);

    } else {

        res.status(404).send("Não encontrada");
    }
};

exports.deletar = (req, res) => {

    tarefaService.deletar(req.params.id);

    res.send("Removida");
};