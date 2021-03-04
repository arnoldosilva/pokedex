import axios from 'axios'

export default axios.create({
    baseURL:'https://pokeapi.co/api/v2'
})

const gifs ='https://projectpokemon.org/images/normal-sprite/'