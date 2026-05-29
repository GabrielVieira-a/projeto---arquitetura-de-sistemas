const express = require("express");

const router = express.Router();

const tarefaController = require("../controllers/tarefaController");

router.get("/", tarefaController.listar);

router.post("/", tarefaController.criar);

router.put("/:id", tarefaController.atualizar);

router.delete("/:id", tarefaController.deletar);

module.exports = router;