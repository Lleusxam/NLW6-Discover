const express = require('express') // Importando o express

const route = require('./route')
const server = express() // Criando o express
const path = require('path')

server.set('view engine', 'ejs') // Setando o EJS como minha engine construtora das views

server.use(express.static("public")) // Importando a pasta public

server.set('views', path.join(__dirname, 'views')) // Localizando a pasta 'views'

server.use(express.urlencoded({extended : true})) // Decodificação (middleware)
server.use(route)

server.listen(3000, () => console.log("RODANDO")) // Porta que o server será aberto


