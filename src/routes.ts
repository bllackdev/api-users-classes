import express from 'express';
import ClassesController from './controllers/ClassesControllers';
import ConnectionsController from './controllers/ConnectionsController';


// GET: Buscar ou listar uma informação
// POST: Criar nova informação
// PUT: Atualizar informação
// DELETE: Deletar informação

// Corpo (Request Body): Dados para criação ou atualização de Registro
// Route Params: Identificar qual recurso quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;