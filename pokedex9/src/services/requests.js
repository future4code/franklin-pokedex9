import axios from "axios";
import { BASE_URL } from "../constants/urls"

// Retorna um array de objetos com os 20 primeiros Pokemons
export const getPokemons = () => {

    axios.get(`${BASE_URL}pokemon/`)
        .then((response) => {
            console.log(response.data.results)
            return(response.data.results)
        })
        .catch((error) => {
            console.log(error)
            return(error.message)
        })
}

// Retorna um array de objetos com o status do pokemon com base no id solicitado
export const getPokemonDetails  = (id) => {
    axios.get(`${BASE_URL}pokemon/${id}`)
    .then((response) => {
        console.log(response.data.stats)
        return(response.data.results)
    })
    .catch((error) => {
        console.log(error)
        return(error.message)
    })
}