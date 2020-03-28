const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

//O nome sessions, vem porque quando estamos fazendo login, queremos CRIAR uma sessão
routes.post('/sessions', SessionController.create);

/**
 * Query
 * Route
 * Body
 * Sempre que um objeto for do js, coloque [] em volta
 */

routes.get('/ongs', OngController.index); 
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().min(9),
    city: Joi.string().required().min(3),
    uf: Joi.string().required().length(2),
  })
}), OngController.create);


routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({ 
    authorization: Joi.string().required()
  }).unknown(),
}), ProfileController.index);


routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), IncidentController.index);

routes.post('/incidents', celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required().max(60),
    description: Joi.string().required().max(500),
    value: Joi.number().required(),
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(), 
}), IncidentController.create);

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), IncidentController.delete);

module.exports = routes; //disponibiliza as rotas para "fora do arquivo"