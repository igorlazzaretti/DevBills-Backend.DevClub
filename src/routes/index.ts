import { Router } from 'express';
import { baseRoutes } from './base.routes';
import { categoriesRoutes } from './categories.route';

// Constante guardiã de todas as rotas
export const routes = Router();

routes.use('/', baseRoutes);
routes.use('/categories', categoriesRoutes);
