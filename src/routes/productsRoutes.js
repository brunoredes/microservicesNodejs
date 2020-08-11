const { Router } = require('express');
const httpProxy = require('express-http-proxy');

const productsRoutes = Router();

const productServiceProxy = httpProxy(process.env.PRODUCT_SERVICE_PROXY);

productsRoutes.get('/products', (request, response, next) => {
  productServiceProxy(request, response, next);
});

module.exports = productsRoutes;
