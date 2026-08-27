const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware global obrigatório para parsing de JSON
app.use(express.json());

// Rota de Healthcheck completa (mantendo dados úteis de uptime)
app.get('/health', (req, res) => {
  return res.status(200).json({
    status: 'UP',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Registro das rotas da entidade de usuários
app.use('/users', userRoutes);

module.exports = app;