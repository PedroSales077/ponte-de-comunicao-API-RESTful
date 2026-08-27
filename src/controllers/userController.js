const { users, getNextId } = require('../data/usersData');

/**
 * Listagem geral de usuários (GET /users)
 * Responde com status 200 OK e o array completo.
 */
const getAllUsers = (req, res) => {
  return res.status(200).json(users);
};

/**
 * Busca específica de usuário por ID (GET /users/:id)
 * Responde com status 200 OK caso encontre, ou 404 Not Found caso não exista.
 */
const getUserById = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({
      erro: `Usuário com ID ${userId} não foi encontrado.`
    });
  }

  return res.status(200).json(user);
};

/**
 * Cadastro de novo usuário (POST /users)
 * Responde com status 201 Created e o recurso criado.
 */
const createUser = (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({
      erro: 'Validação falhou. Os campos "nome" e "email" são obrigatórios.'
    });
  }

  const newUser = {
    id: getNextId(),
    nome,
    email
  };

  users.push(newUser);

  return res.status(201).json(newUser);
};

/**
 * Atualização completa de usuário (PUT /users/:id)
 * Substitui os campos do registro localizado e responde com status 200 OK.
 */
const updateUser = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const { nome, email } = req.body;

  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({
      erro: `Usuário com ID ${userId} não foi encontrado para atualização.`
    });
  }

  if (!nome || !email) {
    return res.status(400).json({
      erro: 'Validação falhou. Os campos "nome" e "email" são obrigatórios.'
    });
  }

  users[userIndex] = {
    id: userId,
    nome,
    email
  };

  return res.status(200).json(users[userIndex]);
};

/**
 * Remoção de usuário (DELETE /users/:id)
 * Remove o registro do array e responde com status 204 No Content.
 */
const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id, 10);

  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({
      erro: `Usuário com ID ${userId} não foi encontrado para exclusão.`
    });
  }

  users.splice(userIndex, 1);

  return res.status(204).send();
};

// Exportação única no final do arquivo
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};