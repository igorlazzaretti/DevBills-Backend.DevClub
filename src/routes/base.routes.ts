// Responsável por guardar todas as rotas base
import { Router } from 'express';

import packageJson from '../../package.json';

export const baseRoutes = Router();

// Variável underline é quando ela não é utilizada
baseRoutes.get('/',(_,res ) => {
    const { name, version, description, author} = packageJson;

    res.status(200).json({ name, version, description, author });
})

// Explicando a arquitetura.
// Entity: Entidade, é a representação de uma tabela no banco de dados. 
//         Não sendo obrigatório ter uma entidade para cada tabela.
// Service: possui as regras de negócio.
// Controller: é responsável por receber a requisição, chamar o service e devolver a resposta.
// Rota: é responsável por receber a requisição, chamar o controller e devolver a resposta.