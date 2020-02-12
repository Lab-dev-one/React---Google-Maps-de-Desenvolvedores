const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://devreact:devreact@react-uuit0.mongodb.net/test?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json())//Faz com que o express entenda requisições com o formato json

app.use(routes)

//Métodos HTTP: GET - buscar , POST - criar , PUT - editar, DELETE - excluir

//Tipos de parâmetros:
//Query params: request.query (Filtros, ordenação, paginação...)
//Route params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)


app.listen(3333);//Define a porta para acessar o servidor do app por exemplo localhost:3333
