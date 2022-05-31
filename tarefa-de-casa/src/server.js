const express = require('express');
const app = express();
const pokedexJson = require('./models/pokedex.json')

app.use(express.json())

app.listen(3000, () => {
    console.log('deu certo sim ta rodando')

});

app.get("/", (request, response) => {
    response.status(200).json([{
    "message": "TA AQUI SUA RESPONSE, GATA"}
])} )

app.get("/pokedex", (request, response) => {
    response.status(200).send(pokedexJson)
})

app.get("/pokedex/:id", (request, response) => {
    let idRequest = request.params.id
    let pokemonEncontrado = pokedexJson.find(pokedex => pokedex.id == idRequest)
    response.status(200).send(pokemonEncontrado)
})

app.get("/pokedex/:name", (request, response) => {
    let nameRequest = request.query.name.toLocaleLowerCase()
    console.log(nameRequest)
    
    let nameEncontrado = pokedexJson.filter(
    pokedex => pokedex.name.toLocaleLowerCase().includes(nameRequest))

    response.status(200).send(nameEncontrado)
});

app.get("/pokedex/type", (request, response) => {
    let typeRequest = request.query.type.toLocaleLowerCase()
    console.log(typeRequest)
    
    let typeEncontrado = pokedexJson.filter(pokedex => pokedex.type.toLocaleLowerCase().includes(typeRequest))
    response.status(200).send(typeEncontrado)
});