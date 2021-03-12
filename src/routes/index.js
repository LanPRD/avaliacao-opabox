const routes = require('express').Router();

const indexRouter = require('./index.routes');
const sortListRouter = require('./list.routes');
const interlaceRouter = require('./interlace.routes');

routes.use('/', indexRouter);
routes.use('/ordenarLista', sortListRouter);
routes.use('/interlace', interlaceRouter);

module.exports = routes;