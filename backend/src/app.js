/** 
 * Rota e Recurso
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Tipos de banco de dados:
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 * Será usado o PostgreSQL
 */

/** 
 * Como fazer comunicações com banco de dados
 *  
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() - utiliza javascript para se comunicar com o banco
 * 
 * Será usado o KnexJS para fazer a comunicação - Query Builder
 */

//Arquivo principal do backend
const express = require('express');
const routes = require('./routes');
const cors = require('cors')
const { errors } = require('celebrate');

const app = express(); //variável que armazena a aplicação

app.use(cors());
app.use(express.json()); //informa ao API que vc trabalhará com dados do tipo JSON
app.use(routes);
app.use(errors());

module.exports = app;