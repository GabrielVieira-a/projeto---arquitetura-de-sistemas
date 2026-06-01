const supabase = require('../database/singleton');

class UsuarioRepository {

    async listar() {
        const { data, error } = await supabase.from('usuarios').select('*');
        if (error) throw error;
        return data;
    }

    async salvar(usuario) {
        const { data, error } = await supabase
            .from('usuarios')
            .insert(usuario)
            .select()
            .single();
        if (error) throw error;
        return data;
    }

    async atualizar(id, dados) {
        const { data, error } = await supabase
            .from('usuarios')
            .update(dados)
            .eq('id', id)
            .select()
            .single();
        if (error) throw error;
        return data;
    }

    async deletar(id) {
        const { error } = await supabase
            .from('usuarios')
            .delete()
            .eq('id', id);
        if (error) throw error;
    }
}

module.exports = new UsuarioRepository();
