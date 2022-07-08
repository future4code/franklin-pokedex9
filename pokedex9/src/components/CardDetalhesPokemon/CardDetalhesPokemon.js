import axios from "axios";
import { useEffect, useState } from "react"

const CardDetalhesPokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonsAbilites, setPokemonsAbilites] = useState([]);
    const [pokemonsImg, setPokemonsImg] = useState([]);
    const [pokemonName, setPokemonName] = useState([]);
    const [pokemonId, setPokemonId] = useState([]);
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    

    // Não consegui passar o id como parametro da requisição ainda!
    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://pokeapi.co/api/v2/pokemon/3`)  
        .then( (res) => {
            setIsLoading(false)
            setPokemonsAbilites(res.data) //Pega todos os dados
            setPokemons(res.data.stats); //Pega Poderes
            setPokemonsImg(res.data.sprites); //Pega Imagens
            setPokemonName(res.data.species.name) //Pega Nome
            setPokemonId(res.data.id) //Pega id
            
        })
        .catch( (error) => {
            setIsLoading(false)
            setError("Deu erro", error)
        })

    }, [])


    return(
        <div>
            <h1>{pokemonName}</h1>
            <div> 
                <div>
                    <img src={pokemonsImg.front_default} alt="pokemon imagem de frente"/>
                </div>
                <div>
                    <img src={pokemonsImg.back_default} alt="pokemon imagem de costas"/>
                </div>
                <h2>Poderes</h2>
                {pokemons.map((pokemon) => { 
                    return (
                        <div key={pokemon.stat.name}> 
                            <p><strong>{pokemon.stat.name}: </strong>{pokemon.base_stat}</p>
                        </div>
                    )
                })};
            </div>
        </div>
    )
    
    
}

export { CardDetalhesPokemon }