const API_URL = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:3000"
    : "https://arquitetura-de-sistemas.vercel.app";

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function getStatusClass(status) {
    if (!status) return 'status-default';
    const s = status.toLowerCase();
    if (s.includes('pendente')) return 'status-pendente';
    if (s.includes('andamento')) return 'status-em-andamento';
    if (s.includes('conclu')) return 'status-concluida';
    return 'status-default';
}

/* =========================
   USUÁRIOS
========================= */

async function criarUsuario() {
    const nome = document.getElementById("nomeUsuario").value.trim();
    const email = document.getElementById("emailUsuario").value.trim();

    if (!nome || !email) {
        showToast('⚠️ Preencha todos os campos');
        return;
    }

    await fetch(`${API_URL}/usuarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email })
    });

    limparCamposUsuario();
    listarUsuarios();
    showToast('✓ Usuário cadastrado com sucesso!');
}

async function listarUsuarios() {
    const resposta = await fetch(`${API_URL}/usuarios`);
    const usuarios = await resposta.json();
    const lista = document.getElementById("listaUsuarios");
    const count = document.getElementById("countUsuarios");

    lista.innerHTML = "";
    if (count) count.textContent = usuarios.length;

    if (usuarios.length === 0) {
        lista.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">👤</div>
                Nenhum usuário cadastrado ainda.
            </div>`;
        return;
    }

    usuarios.forEach(usuario => {
        const item = document.createElement("li");
        item.innerHTML = `
            <div class="user-name">${usuario.nome}</div>
            <div class="user-email">${usuario.email}</div>
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
    const titulo = document.getElementById("tituloTarefa").value.trim();
    const descricao = document.getElementById("descricaoTarefa").value.trim();
    const status = document.getElementById("statusTarefa").value;

    if (!titulo || !descricao || !status) {
        showToast('⚠️ Preencha todos os campos');
        return;
    }

    await fetch(`${API_URL}/tarefas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, descricao, status })
    });

    limparCamposTarefa();
    listarTarefas();
    showToast('✓ Tarefa criada com sucesso!');
}

async function listarTarefas() {
    const resposta = await fetch(`${API_URL}/tarefas`);
    const tarefas = await resposta.json();
    const lista = document.getElementById("listaTarefas");
    const count = document.getElementById("countTarefas");

    lista.innerHTML = "";
    if (count) count.textContent = tarefas.length;

    if (tarefas.length === 0) {
        lista.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📋</div>
                Nenhuma tarefa criada ainda.
            </div>`;
        return;
    }

    tarefas.forEach(tarefa => {
        const item = document.createElement("li");
        const statusClass = getStatusClass(tarefa.status);
        item.innerHTML = `
            <div class="task-title">${tarefa.titulo}</div>
            <div class="task-desc">${tarefa.descricao}</div>
            <div class="task-footer">
                <span class="status-badge ${statusClass}">${tarefa.status || 'Sem status'}</span>
                <select class="status-select" onchange="atualizarStatus(${tarefa.id}, this.value)">
                    <option value="">Alterar status...</option>
                    <option value="pendente">Pendente</option>
                    <option value="em andamento">Em Andamento</option>
                    <option value="concluida">Concluída</option>
                </select>
            </div>
        `;
        lista.appendChild(item);
    });
}

async function atualizarStatus(id, novoStatus) {
    if (!novoStatus) return;

    await fetch(`${API_URL}/tarefas/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: novoStatus })
    });

    listarTarefas();
    showToast('✓ Status atualizado!');
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
