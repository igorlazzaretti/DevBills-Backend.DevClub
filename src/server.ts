// Importa o express da Biblioteca express
import express, { json } from 'express';
// Cria uma instância do express
const app = express();
// Use o json para fazer o parse do corpo da requisição
app.use(json());

app.listen( 3333, () => {
    console.log('Server started on port 3333 🚀')
})

