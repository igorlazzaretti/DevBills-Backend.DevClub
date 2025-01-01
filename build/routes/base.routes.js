"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseRoutes = void 0;
// Responsável por guardar todas as rotas base
const express_1 = require("express");
exports.baseRoutes = (0, express_1.Router)();
// Variável underline é quando ela não é utilizada
exports.baseRoutes.get('/', (_, res) => {
    const { name, version, description, author } = packageJson;
    res.json({ name, version, description, author });
});
