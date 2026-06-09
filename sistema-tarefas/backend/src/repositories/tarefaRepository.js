// REPOSITORY — única camada que fala diretamente com o banco
// toda query do Supabase fica aqui, o resto do código não sabe como o banco funciona
const supabase = require('../database/singleton');

class TarefaRepository {

    // busca todas as tarefas da tabela
    async listar() {
        const { data, error } = await supabase.from('tarefas').select('*');
        if (error) throw error;
        return data;
    }

    // insere uma tarefa nova e retorna o registro criado
    async salvar(tarefa) {
        const { data, error } = await supabase
            .from('tarefas')
            .insert(tarefa)
            .select()
            .single(); // .single() garante que retorna um objeto e não um array
        if (error) throw error;
        return data;
    }

    // atualiza os campos da tarefa onde o id bater
    async atualizar(id, dados) {
        const { data, error } = await supabase
            .from('tarefas')
            .update(dados)
            .eq('id', id) // .eq() é o WHERE id = ?
            .select()
            .single();
        if (error) throw error;
        return data;
    }

    // deleta a tarefa onde o id bater
    async deletar(id) {
        const { error } = await supabase
            .from('tarefas')
            .delete()
            .eq('id', id);
        if (error) throw error;
    }
}

// exporta já instanciado — padrão singleton, uma única instância pra todo o app
module.exports = new TarefaRepository();
