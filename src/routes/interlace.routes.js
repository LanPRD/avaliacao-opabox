const interlaceRouter = require('express').Router();

const CheckRepetitionService = require('../services/CheckRepetitionService');

interlaceRouter.get('/', (request, response) => {
    const { intervaloA, intervaloB } = request.query;

    const checkRepetition = new CheckRepetitionService();

    if(intervaloA && intervaloB) {
        const { message, type } = checkRepetition.run({ intervaloA, intervaloB });
        console.log( message );
        return response.render('interlace', { message: message, type: type });
    }
    
    return response.render('interlace');
});

module.exports = interlaceRouter;