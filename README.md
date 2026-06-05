# Sistema de Gerenciamento de Tarefas e Usuários

## Integrantes

- Gabriel Vieira Aranha
- Davi Rodrigues Monteiro Sampaio

---

## Descrição

Aplicação Full Stack para gerenciamento de tarefas e usuários, desenvolvida para aplicar conceitos de Projeto e Arquitetura de Sistemas.

O sistema possui:

- Frontend estático hospedado no Vercel
- Backend REST API hospedado no Vercel (Serverless Functions)
- Banco de dados PostgreSQL via Supabase
- Arquitetura MVC com separação em camadas

---

## Acesso Online

| Serviço | URL |
|---|---|
| Frontend | https://projeto-arquitetura-de-sistemas.vercel.app |
| Backend (API) | https://arquitetura-de-sistemas.vercel.app |

---

## Objetivos do Projeto

- Arquitetura MVC
- Arquitetura em Camadas (Layers)
- REST API
- Padrões GRASP e GoF
- Separação de responsabilidades
- Comunicação cliente-servidor

---


## Tecnologias Utilizadas

### Backend
- Node.js
- Express
- Supabase (PostgreSQL)
- Vercel Serverless Functions

### Frontend
- HTML5
- CSS3
- JavaScript

### Infraestrutura
- Vercel (deploy e hospedagem)
- Supabase (banco de dados em nuvem)
- GitHub (controle de versão)

---

## Funcionalidades

### Usuários
- Criar usuário
- Listar usuários

### Tarefas
- Criar tarefa
- Listar tarefas
- Atualizar status da tarefa
- Remover tarefa

---

## Arquitetura do Sistema

```
Frontend (Vercel)
      ↓
API REST (Vercel Serverless)
      ↓
Routes → Controllers → Services → Repositories
      ↓
Database Singleton (Supabase/PostgreSQL)
```

---

## Como Executar Localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/GabrielVieira-a/projeto---arquitetura-de-sistemas.git
cd projeto---arquitetura-de-sistemas
```

### 2. Configurar o Backend

```bash
cd sistema-tarefas/backend
npm install
```

Crie um arquivo `.env` na pasta `backend` com as variáveis do Supabase:

```env
SUPABASE_URL=https://SEU_PROJECT_ID.supabase.co
SUPABASE_KEY=SUA_CHAVE_ANON
```

Execute o servidor:

```bash
node server.js
```

O backend estará disponível em `http://localhost:3000`.

### 3. Executar o Frontend

Abra o arquivo `sistema-tarefas/frontend/index.html` no navegador ou use a extensão **Live Server** do VSCode.

---

## Variáveis de Ambiente

| Variável | Descrição |
|---|---|
| `SUPABASE_URL` | URL do projeto no Supabase |
| `SUPABASE_KEY` | Chave anon pública do Supabase |

---

## Endpoints da API

### Usuários

| Método | Rota | Descrição |
|---|---|---|
| GET | `/usuarios` | Lista todos os usuários |
| POST | `/usuarios` | Cria um novo usuário |

### Tarefas

| Método | Rota | Descrição |
|---|---|---|
| GET | `/tarefas` | Lista todas as tarefas |
| POST | `/tarefas` | Cria uma nova tarefa |
| PUT | `/tarefas/:id` | Atualiza uma tarefa |
| DELETE | `/tarefas/:id` | Remove uma tarefa |

---

## Testando com Postman

### Criar Usuário
```
POST https://arquitetura-de-sistemas.vercel.app/usuarios
Content-Type: application/json

{
  "nome": "Gabriel",
  "email": "gabriel@email.com"
}
```

### Criar Tarefa
```
POST https://arquitetura-de-sistemas.vercel.app/tarefas
Content-Type: application/json

{
  "titulo": "Estudar",
  "descricao": "Arquitetura de Sistemas",
  "status": "pendente"
}
```

### Atualizar Status de Tarefa
```
PUT https://arquitetura-de-sistemas.vercel.app/tarefas/1
Content-Type: application/json

{
  "status": "concluida"
}
```
