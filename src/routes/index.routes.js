const indexRouter = require('express').Router();


indexRouter.get('/', (request, response) => {    
    return response.render('index');
});

module.exports = indexRouter;