const db = require("../database/singleton");

class UsuarioRepository {

    listar() {
        return db.usuarios;
    }

    salvar(usuario) {

        db.usuarios.push(usuario);

        return usuario;
    }

    atualizar(id, dados) {

        const usuario = db.usuarios.find(
            u => u.id == id
        );

        if (usuario) {

            usuario.nome = dados.nome;
            usuario.email = dados.email;
        }

        return usuario;
    }

    deletar(id) {

        db.usuarios = db.usuarios.filter(
            u => u.id != id
        );
    }
}

module.exports = new UsuarioRepository();