"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const base_routes_1 = require("./base.routes");
// Constante guardiã de todas as rotas
exports.routes = (0, express_1.Router)();
exports.routes.use('/', base_routes_1.baseRoutes);
// routes.use('/categories', baseRoutes);
