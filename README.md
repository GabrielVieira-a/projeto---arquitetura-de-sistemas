# 📌 Sistema de Gerenciamento de Tarefas e Usuários

## 📖 Descrição

Este projeto consiste em uma aplicação Full Stack simples desenvolvida para gerenciar tarefas e usuários.

O sistema possui:

- Frontend separado
- Backend REST API
- Arquitetura MVC
- Arquitetura em Camadas (Layers)

O objetivo principal é aplicar conceitos de Projeto e Arquitetura de Sistemas utilizando boas práticas de desenvolvimento de software.

---

# 🎯 Objetivos do Projeto

O projeto foi desenvolvido para aplicar na prática conceitos como:

- Arquitetura MVC
- Arquitetura em Camadas
- REST API
- Padrões GRASP
- Padrões GoF
- Organização de código
- Separação de responsabilidades
- Comunicação cliente-servidor

---

# 👥 Integrantes

- Gabriel Vieira
- Davi Rodrigues

---

# 🛠️ Tecnologias Utilizadas

## Backend

- Node.js
- Express
- JavaScript

## Frontend

- HTML5
- CSS3
- JavaScript

---

# 🧩 Funcionalidades

## 📌 Usuários

- Criar usuário
- Listar usuários
- Atualizar usuário
- Remover usuário

---

## 📌 Tarefas

- Criar tarefa
- Listar tarefas
- Atualizar tarefa
- Remover tarefa

---

# 🏗️ Arquitetura do Sistema

O projeto foi organizado utilizando arquitetura cliente-servidor.

## Estrutura Geral

```text
Frontend
   ↓
API REST
   ↓
Routes
   ↓
Controllers
   ↓
Services
   ↓
Repositories
   ↓
Database Singleton

# 🚀 Como Executar a Aplicação

## ✅ 1. Clonar o Repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

---

## ✅ 2. Acessar a Pasta do Projeto

```bash
cd sistema-tarefas
```

---

# ⚙️ Executando o Backend

## ✅ 3. Entrar na Pasta Backend

```bash
cd backend
```

---

## ✅ 4. Instalar as Dependências

```bash
npm install
```

---

## ✅ 5. Instalar o CORS

```bash
npm install cors
```

---

## ✅ 6. Executar o Servidor

```bash
node server.js
```

---

## ✅ Resultado Esperado

O terminal deverá exibir:

```bash
Servidor rodando na porta 3000
```

O backend estará disponível em:

```text
http://localhost:3000
```

---

# 💻 Executando o Frontend

## ✅ 7. Abrir a Pasta Frontend

Volte para a raiz do projeto e entre na pasta frontend:

```bash
cd ../frontend
```

---

## ✅ 8. Abrir o Frontend

Abra o arquivo:

```text
index.html
```

em qualquer navegador.

Você também pode utilizar a extensão **Live Server** do VSCode.

---

# 🧪 Como Testar o Sistema

## ✅ Testar Usuários

1. Preencha:
   - Nome
   - Email

2. Clique em:

```text
Cadastrar Usuário
```

3. O usuário deverá aparecer na lista.

---

## ✅ Testar Tarefas

1. Preencha:
   - Título
   - Descrição
   - Status

2. Clique em:

```text
Criar Tarefa
```

3. A tarefa deverá aparecer na lista.

---

# 🔗 Testando a API Diretamente

## 📌 Listar Usuários

Abra no navegador:

```text
http://localhost:3000/usuarios
```

---

## 📌 Listar Tarefas

Abra no navegador:

```text
http://localhost:3000/tarefas
```

---

# 🧪 Testando com Postman

## ✅ Criar Usuário

### Método:
```http
POST
```

### URL:
```text
http://localhost:3000/usuarios
```

### Body JSON:
```json
{
  "nome": "Gabriel",
  "email": "gabriel@email.com"
}
```

---

## ✅ Criar Tarefa

### Método:
```http
POST
```

### URL:
```text
http://localhost:3000/tarefas
```

### Body JSON:
```json
{
  "titulo": "Estudar",
  "descricao": "Arquitetura",
  "status": "pendente"
}
```

---

# ⚠️ Observação

O sistema utiliza um banco de dados em memória através do padrão Singleton.

Os dados permanecem armazenados enquanto o servidor estiver em execução.
Ao reiniciar o servidor, os dados serão apagados.
