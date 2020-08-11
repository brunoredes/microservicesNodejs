const { Router } = require('express');
const userRoutes = require('./userRoutes');
const productsRoutes = require('./productsRoutes');
const notFound = require('./errorRoutes');

const routes = Router();

routes.use(userRoutes);
routes.use(productsRoutes);
routes.use(notFound);

module.exports = routes;
