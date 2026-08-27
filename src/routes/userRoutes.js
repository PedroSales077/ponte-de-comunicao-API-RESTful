const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// READ (Listagem geral)
router.get('/', userController.getAllUsers);

// READ (Busca por ID)
router.get('/:id', userController.getUserById);

// CREATE (Cadastro)
router.post('/', userController.createUser);

// UPDATE (Atualização)
router.put('/:id', userController.updateUser);

// DELETE (Remoção)
router.delete('/:id', userController.deleteUser);

module.exports = router;