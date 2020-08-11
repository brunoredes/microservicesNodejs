require('dotenv/config');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const routes = require('./routes/routes');

const app = express();

app.use(helmet());
app.use(logger('tiny', { skip: (req, res) => res.statusCode < 400}));
app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = app;
