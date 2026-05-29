class Usuario {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}

// Factory
function criarUsuario(id, nome, email) {
    return new Usuario(id, nome, email);
}

module.exports = { Usuario, criarUsuario };