const sortListRouter = require('express').Router();

const OrderListService = require('../services/OrderListService');

sortListRouter.get('/', (request, response) => { 
    return response.render('ordenarLista');
});

sortListRouter.post('/', (request, response) => {
    const listas = request.body;
    const { salaS, salaN } = listas

    const orderList = new OrderListService();

    const { sortSalaN, sortSalaS } = orderList.run({
        salaN,
        salaS,
    });
    
    return response.render('ordenarLista', {
        sortSalaN: sortSalaN,
        sortSalaS: sortSalaS
    });
});

module.exports = sortListRouter;