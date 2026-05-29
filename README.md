# 📌 Sistema de Gerenciamento de Tarefas e Usuários

## 📖 Descrição

Este projeto consiste em uma aplicação simples desenvolvida em Node.js com o objetivo de gerenciar tarefas e usuários. O sistema permite realizar operações básicas de CRUD (Create, Read, Update e Delete), atendendo aos requisitos da disciplina de Projeto e Arquitetura de Sistemas.

---

## 🎯 Objetivo

O sistema foi desenvolvido para aplicar na prática conceitos de arquitetura de software, utilizando:

* Padrões GRASP
* Padrões GoF
* Estrutura baseada em orientação a objetos

---

## 👥 Integrantes

* Gabriel Vieira
* Davi Rodrigues

---

## ⚙️ Tecnologias utilizadas

* Node.js
* Express
* JavaScript

---

## 🧩 Funcionalidades

### 🔹 Tarefas

* Criar tarefa
* Listar tarefas
* Atualizar tarefa
* Deletar tarefa

### 🔹 Usuários

* Criar usuário
* Listar usuários
* Atualizar usuário
* Deletar usuário

---

## 🏗️ Padrões Utilizados

### ✅ GRASP

* **Controller:** Responsável por gerenciar as requisições (Controllers)
* **Information Expert:** Classes responsáveis por seus próprios dados

### ✅ GoF

* **Singleton:** Utilizado para manter uma única instância das listas de dados
* **Factory Method:** Utilizado na criação dos objetos (tarefas e usuários)

---

## 🚀 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Acessar a pasta do projeto

```bash
cd sistema-tarefas
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o servidor

```bash
node server.js
```

O servidor será iniciado em:

```
http://localhost:3000
```

---

## 🧪 Endpoints da API

### 📌 Tarefas

* **POST** `/tarefas` → Criar tarefa
* **GET** `/tarefas` → Listar tarefas
* **PUT** `/tarefas/:id` → Atualizar tarefa
* **DELETE** `/tarefas/:id` → Remover tarefa

---

### 📌 Usuários

* **POST** `/usuarios` → Criar usuário
* **GET** `/usuarios` → Listar usuários
* **PUT** `/usuarios/:id` → Atualizar usuário
* **DELETE** `/usuarios/:id` → Remover usuário

---

## 📥 Requisições e Payloads

### 🔹 Criar Tarefa

```bash
curl -X POST http://localhost:3000/tarefas \
-H "Content-Type: application/json" \
-d '{"titulo":"Estudar","descricao":"Prova","status":"pendente"}'
```

### 🔹 Listar Tarefas

```bash
curl http://localhost:3000/tarefas
```

---

### 🔹 Atualizar Tarefa

```bash
curl -X PUT http://localhost:3000/tarefas/1 \
-H "Content-Type: application/json" \
-d '{"titulo":"Atualizado","descricao":"Nova","status":"concluida"}'
```

---

### 🔹 Deletar Tarefa

```bash
curl -X DELETE http://localhost:3000/tarefas/1
```

---

### 🔹 Criar Usuário

```bash
curl -X POST http://localhost:3000/usuarios \
-H "Content-Type: application/json" \
-d '{"nome":"Gabriel","email":"gabriel@email.com"}'
```

---

### 🔹 Listar Usuários

```bash
curl http://localhost:3000/usuarios
```

---

### 🔹 Atualizar Usuário

```bash
curl -X PUT http://localhost:3000/usuarios/1 \
-H "Content-Type: application/json" \
-d '{"nome":"Gabriel Atualizado","email":"novo@email.com"}'
```

---

### 🔹 Deletar Usuário

```bash
curl -X DELETE http://localhost:3000/usuarios/1
```

---

🚀 Como executar o projeto
1. Acessar a pasta do projeto
cd sistema-tarefas
2. Instalar as dependências
npm install
3. Executar o servidor
node server.js

O servidor será iniciado em:

http://localhost:3000
🧪 Testando a API no Postman

👉 Abra o Postman

📌 Tarefas
🔹 Criar Tarefa
Método: POST
URL:
http://localhost:3000/tarefas
Body → raw → JSON:
{
  "titulo": "Estudar",
  "descricao": "Prova",
  "status": "pendente"
}
🔹 Listar Tarefas
Método: GET
URL:
http://localhost:3000/tarefas
🔹 Atualizar Tarefa
Método: PUT
URL:
http://localhost:3000/tarefas/1
Body → raw → JSON:
{
  "titulo": "Atualizado",
  "descricao": "Nova",
  "status": "concluida"
}
🔹 Deletar Tarefa
Método: DELETE
URL:
http://localhost:3000/tarefas/1
📌 Usuários
🔹 Criar Usuário
Método: POST
URL:
http://localhost:3000/usuarios
Body → raw → JSON:
{
  "nome": "Davi",
  "email": "davi@email.com"
}
🔹 Listar Usuários
Método: GET
URL:
http://localhost:3000/usuarios
🔹 Atualizar Usuário
Método: PUT
URL:
http://localhost:3000/usuarios/1
Body → raw → JSON:
{
  "nome": "Davi Atualizado",
  "email": "novo@email.com"
}
🔹 Deletar Usuário
Método: DELETE
URL:
http://localhost:3000/usuarios/1

## 📸 Evidências

As evidências de execução (prints do sistema) foram geradas utilizando ferramentas como Postman, demonstrando o funcionamento completo das operações CRUD.

---

## 📌 Considerações Finais

Este projeto demonstra a aplicação prática de conceitos fundamentais de desenvolvimento de software, com foco em organização, reutilização de código e boas práticas de arquitetura.

---
