const { Router } = require('express');
const httpProxy = require('express-http-proxy');

const userRoutes = Router();

const userServiceProxy = httpProxy(process.env.USER_SERVICE_PROXY);

userRoutes.get('/users', (request, response, next) => {
  userServiceProxy(request, response, next);
});

module.exports = userRoutes;
