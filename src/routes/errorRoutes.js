const { Router } = require('express');

const notFound = Router();

notFound.get('*', (request, response) => {
  return response.status(404).json({ error: 'Página não encontrada ):' })
})

module.exports = notFound;
