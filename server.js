// import modules

import express from 'express'
import { pokemon } from './data/pokemon.js'
import { name } from 'ejs'

// create Express app

const app = express()

// configure the app (app.set)
app.set('view engine', 'ejs')


// mount Middleware (app.use)



// mount routes
app.get("/", function(req, res){
  res.redirect("/pokemon")
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get("/pokemon", function(req, res) {
  res.render("pokemon/index",{
    pokemon: pokemon
  })
})

app.get("/pokemon/:name", (req, res) =>{
  console.log(req.params.name);
  let pokeType 
  let pokeHP
  pokemon.forEach(pokemon =>{
    if (req.params.name === pokemon.name.toLowerCase()){
      pokeType = pokemon.type
      pokeHP = pokemon.hp
    }
  })
  res.send(`<h1>The type of ${req.params.name} is ${pokeType} and has a HP value of ${pokeHP} </h1>`)
})
//thank you Callum



app.listen(3000, function() {
  console.log('Listening on port 3000')
})