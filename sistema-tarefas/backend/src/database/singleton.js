class Database {
    constructor() {

        if (!Database.instance) {

            this.usuarios = [];
            this.tarefas = [];

            Database.instance = this;
        }

        return Database.instance;
    }
}

const instance = new Database();

Object.freeze(instance);

module.exports = instance;