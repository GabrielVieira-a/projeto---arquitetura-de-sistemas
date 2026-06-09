// MODEL — define o formato/estrutura de um usuário
// é o "molde" do objeto que circula pela aplicação
class Usuario {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}

// Factory — jeito alternativo de criar um Usuario sem usar o "new" direto
function criarUsuario(id, nome, email) {
    return new Usuario(id, nome, email);
}

module.exports = { Usuario, criarUsuario };
