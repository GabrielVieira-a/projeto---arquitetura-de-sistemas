const API_URL = "http://localhost:3000";

/* =========================
USUÁRIOS
========================= */

async function criarUsuario() {

    const nome = document.getElementById("nomeUsuario").value;

    const email = document.getElementById("emailUsuario").value;

    await fetch(`${API_URL}/usuarios`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            nome,
            email
        })
    });

    limparCamposUsuario();

    listarUsuarios();
}

async function listarUsuarios() {

    const resposta = await fetch(`${API_URL}/usuarios`);

    const usuarios = await resposta.json();

    const lista = document.getElementById("listaUsuarios");

    lista.innerHTML = "";

    usuarios.forEach(usuario => {

        const item = document.createElement("li");

        item.innerHTML = `
            <strong>${usuario.nome}</strong>
            <br>
            ${usuario.email}
        `;

        lista.appendChild(item);
    });
}

function limparCamposUsuario() {

    document.getElementById("nomeUsuario").value = "";

    document.getElementById("emailUsuario").value = "";
}

/* =========================
   TAREFAS
========================= */

async function criarTarefa() {

    const titulo = document.getElementById("tituloTarefa").value;

    const descricao = document.getElementById("descricaoTarefa").value;

    const status = document.getElementById("statusTarefa").value;

    await fetch(`${API_URL}/tarefas`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            titulo,
            descricao,
            status
        })
    });

    limparCamposTarefa();

    listarTarefas();
}

async function listarTarefas() {

    const resposta = await fetch(`${API_URL}/tarefas`);

    const tarefas = await resposta.json();

    const lista = document.getElementById("listaTarefas");

    lista.innerHTML = "";

    tarefas.forEach(tarefa => {

        const item = document.createElement("li");

        item.innerHTML = `
            <strong>${tarefa.titulo}</strong>
            <br>
            ${tarefa.descricao}
            <br>
            Status: ${tarefa.status}
        `;

        lista.appendChild(item);
    });
}

function limparCamposTarefa() {

    document.getElementById("tituloTarefa").value = "";

    document.getElementById("descricaoTarefa").value = "";

    document.getElementById("statusTarefa").value = "";
}

/* =========================
   INICIALIZAÇÃO
========================= */

listarUsuarios();

listarTarefas();