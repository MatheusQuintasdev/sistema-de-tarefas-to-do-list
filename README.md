# ✅ Sistema de Tarefas — To Do List API

API REST de gerenciamento de tarefas desenvolvida com Node.js, Express, Prisma ORM e PostgreSQL. O sistema permite criar, listar, atualizar e deletar tarefas, além de marcar como concluídas.

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

---

## 📋 Funcionalidades

- ✅ Criar tarefas
- ✅ Listar todas as tarefas
- ✅ Atualizar tarefas
- ✅ Marcar tarefa como concluída
- ✅ Deletar tarefas

---

## 🔧 Como rodar localmente

### Pré-requisitos

- Node.js instalado
- PostgreSQL instalado e rodando

### Instalação

```bash
# Clone o repositório
git clone https://github.com/MatheusQuintasdev/sistema-de-tarefas-to-do-list.git

# Entre na pasta
cd sistema-de-tarefas-to-do-list

# Instale as dependências
npm install
```

### Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://postgres:sua-senha@localhost:5432/todolist"
```

### Rodando o projeto

```bash
# Gere o Prisma Client
npx prisma generate

# Rode as migrations
npx prisma migrate dev

# Inicie o servidor
npm run dev
```

O servidor estará disponível em `http://localhost:3000`

---

## 📌 Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/tasks` | Lista todas as tarefas |
| POST | `/tasks` | Cria uma nova tarefa |
| PUT | `/tasks/:id` | Atualiza uma tarefa |
| DELETE | `/tasks/:id` | Deleta uma tarefa |

### Exemplos de requisição

**Criar tarefa — POST /tasks**
```json
{
  "title": "Estudar Node.js"
}
```

**Atualizar tarefa — PUT /tasks/1**
```json
{
  "title": "Estudar Node.js",
  "done": true
}
```

**Resposta padrão**
```json
{
  "id": 1,
  "title": "Estudar Node.js",
  "done": false,
  "createdAt": "2026-03-19T01:31:26.582Z"
}
```

---

## 📁 Estrutura do Projeto

```
├── prisma/
│   ├── migrations/      # Histórico de migrations
│   └── schema.prisma    # Schema do banco de dados
├── routes/
│   └── tasks.js         # Rotas de tarefas (CRUD)
├── .env.example         # Exemplo de variáveis de ambiente
└── server.js            # Entrada da aplicação
```

---

## 👨‍💻 Autor

Feito por **Matheus Quintas** — estudante de ADS na FIAP, focado em desenvolvimento backend.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Matheus%20Quintas-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/matheus-quintass)
[![GitHub](https://img.shields.io/badge/GitHub-MatheusQuintasdev-black?style=flat&logo=github)](https://github.com/MatheusQuintasdev)
