# 🚀 API Connect – Gerenciamento de Usuários (MVP)

> **Experiência Prática II – Desenvolvimento Back-end**  
> API RESTful desenvolvida em Node.js e Express para simular a camada back-end de uma startup de tecnologia, oferecendo gerenciamento de perfis de usuários com validações e padronização JSON.

---

## 📌 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura de Pastas](#-arquitetura-de-pastas)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Documentação dos Endpoints](#-documentação-dos-endpoints)
  - [Healthcheck](#1-healthcheck)
  - [Listar Usuários](#2-listar-todos-os-usuários)
  - [Buscar Usuário por ID](#3-buscar-usuário-por-id)
  - [Cadastrar Usuário](#4-cadastrar-novo-usuário)
  - [Atualizar Usuário](#5-atualizar-usuário)
  - [Excluir Usuário](#6-remover-usuário)
- [Padrões de Resposta](#-padrões-de-resposta)
- [Autor](#-autor)

---

## 📖 Sobre o Projeto

A **API Connect** foi desenvolvida para atender às demandas de uma startup em estágio inicial (MVP). A aplicação é responsável por centralizar o gerenciamento de dados de usuários, permitindo operações de criação, leitura, atualização e remoção (**CRUD**), garantindo um contrato de comunicação determinístico, previsível e seguro para a integração com aplicações front-end.

---

## 🛠 Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript assíncrono e orientado a eventos.
- **[Express.js](https://expressjs.com/):** Framework web minimalista para construção de APIs RESTful.
- **[Dotenv](https://www.npmjs.com/package/dotenv):** Gerenciamento de variáveis de ambiente.
- **[Nodemon](https://www.npmjs.com/package/nodemon):** Ferramenta de desenvolvimento para reload automático do servidor.
- **[Thunder Client](https://www.thunderclient.com/):** Cliente HTTP utilizado para testes manuais dos endpoints.

---

## 📁 Arquitetura de Pastas

A estrutura foi desenhada seguindo a **Separação de Responsabilidades (SoC)** para permitir facilidade de manutenção e escalabilidade:

```text
api-connect/
├── src/
│   ├── controllers/   # Regras de transporte, tratamento de requisições e respostas HTTP
│   ├── data/          # Persistência de dados provisória em memória RAM
│   ├── routes/        # Mapeamento e roteamento dos endpoints REST
│   └── app.js         # Instanciação do Express e registro de middlewares globais
├── .env.example       # Template de variáveis de ambiente
├── .gitignore         # Arquivos ignorados pelo controle de versão
├── package.json       # Manifesto e dependências do projeto
└── server.js          # Bootstrapping e inicialização da escuta na porta HTTP


⚙️ Como Executar o Projeto
Pró-requisitos
Node.js (versão 18 ou superior recomendada)

npm (instalado junto com o Node)

Passo a passo
Clonar o repositório:

Bash
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
cd api-connect
Instalar as dependências:

Bash
npm install
Configurar as variáveis de ambiente:
Copie o arquivo .env.example para .env (ou altere a porta se necessário):

Bash
cp .env.example .env
Iniciar o servidor em modo de desenvolvimento:

Bash
npm run dev
(O servidor iniciará em http://localhost:3000)

🛣 Documentação dos Endpoints
1. Healthcheck
Rota: GET /health

Descrição: Verifica se o servidor está ativo e operacional.

Status HTTP: 200 OK

2. Listar Todos os Usuários
Rota: GET /users

Descrição: Retorna a coleção completa de usuários cadastrados.

Status HTTP: 200 OK

3. Buscar Usuário por ID
Rota: GET /users/:id

Descrição: Retorna os dados de um usuário específico via parâmetro de URL.

Status HTTP:

200 OK (Recurso localizado)

404 Not Found (ID inexistente)

4. Cadastrar Novo Usuário
Rota: POST /users

Descrição: Registra um novo usuário no sistema. Valida obrigatoriedade de campos, formato de e-mail e duplicidade.

Body (application/json):

JSON
{
  "nome": "Ana Souza",
  "email": "ana.souza@exemplo.com"
}
Status HTTP:

201 Created (Sucesso na criação)

400 Bad Request (Falha na validação de dados)

409 Conflict (E-mail já cadastrado)

5. Atualizar Usuário
Rota: PUT /users/:id

Descrição: Atualiza integralmente os dados do usuário indicado pelo ID.

Body (application/json):

JSON
{
  "nome": "Ana Souza Santos",
  "email": "ana.santos@exemplo.com"
}
Status HTTP:

200 OK (Atualizado com sucesso)

400 Bad Request (Dados inválidos no body)

404 Not Found (Usuário não localizado)

6. Remover Usuário
Rota: DELETE /users/:id

Descrição: Exclui o registro da memória a partir do ID fornecido.

Status HTTP:

204 No Content (Excluído com sucesso, sem corpo de retorno)

404 Not Found (ID não encontrado)

🎯 Padrões de Resposta
A API adota envelopes determinísticos em JSON para padronização no consumo pelo front-end:

Resposta de Sucesso (200/201)
JSON
{
  "success": true,
  "data": {
    "id": 1,
    "nome": "João Silva",
    "email": "joao.silva@exemplo.com"
  }
}
Resposta de Erro (400/404/409)
JSON
{
  "success": false,
  "error": {
    "code": "INVALID_EMAIL",
    "message": "O campo \"email\" deve conter um endereço de e-mail válido."
  }
}


👤 Autor
Desenvolvido por Pedro Sales
