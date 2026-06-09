// pega a função que cria a conexão com o Supabase
const { createClient } = require('@supabase/supabase-js');

// cria UMA única conexão usando as credenciais do .env
// (singleton = todo mundo usa essa mesma instância, não fica criando várias)
const supabase = createClient(
    process.env.SUPABASE_URL,  // endereço do banco
    process.env.SUPABASE_KEY   // chave de acesso
);

// exporta pra qualquer arquivo que precisar usar o banco
module.exports = supabase;
