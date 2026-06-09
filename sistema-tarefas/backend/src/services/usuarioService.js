// SERVICE — camada de regras de negócio pra usuários
// fica entre o controller e o repository
// é aqui que você colocaria validações, como checar email duplicado por exemplo
const usuarioRepository = require('../repositories/usuarioRepository');

// filtra só nome e email antes de salvar (não deixa campos indesejados entrar)
exports.criar = async (dados) => {
    return usuarioRepository.salvar({ nome: dados.nome, email: dados.email });
};

// sem lógica extra, só repassa pro repository
exports.listar = async () => {
    return usuarioRepository.listar();
};

// filtra só os campos que podem ser atualizados
exports.atualizar = async (id, dados) => {
    return usuarioRepository.atualizar(id, { nome: dados.nome, email: dados.email });
};

exports.deletar = async (id) => {
    return usuarioRepository.deletar(id);
};
