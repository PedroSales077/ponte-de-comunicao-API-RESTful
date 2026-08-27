
// Estrutura de dados inicial em memória (simulação de tabela de banco de dados)
const users = [
  {
    id: 1,
    nome: 'João Silva',
    email: 'joao.silva@exemplo.com'
  },
  {
    id: 2,
    nome: 'Maria Santos',
    email: 'maria.santos@exemplo.com'
  }
];

// Controlador de ID incremental baseado no maior ID existente
let currentId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;

/**
 * Função utilitária para gerar o próximo ID único incremental.
 * @returns {number} Próximo ID
 */
const getNextId = () => {
  currentId += 1;
  return currentId;
};

module.exports = {
  users,
  getNextId
};