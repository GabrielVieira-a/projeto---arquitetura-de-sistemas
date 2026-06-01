const supabase = require('../database/singleton');

class TarefaRepository {

    async listar() {
        const { data, error } = await supabase.from('tarefas').select('*');
        if (error) throw error;
        return data;
    }

    async salvar(tarefa) {
        const { data, error } = await supabase
            .from('tarefas')
            .insert(tarefa)
            .select()
            .single();
        if (error) throw error;
        return data;
    }

    async atualizar(id, dados) {
        const { data, error } = await supabase
            .from('tarefas')
            .update(dados)
            .eq('id', id)
            .select()
            .single();
        if (error) throw error;
        return data;
    }

    async deletar(id) {
        const { error } = await supabase
            .from('tarefas')
            .delete()
            .eq('id', id);
        if (error) throw error;
    }
}

module.exports = new TarefaRepository();
