import { CardDetalhesPokemon } from "../../components/CardDetalhesPokemon/CardDetalhesPokemon";
import { Header } from '../../components/Header/Header';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react"

export const PokeDexDetails = () => {

    const [pokemons, setPokemons] = useState([]);
    const [pokemonsAbilites, setPokemonsAbilites] = useState([]);
    const [pokemonsImg, setPokemonsImg] = useState([]);
    const [pokemonName, setPokemonName] = useState([]);
    const [pokemonMoves, setPokemonMoves] = useState([]);
    const {id} = useParams()


    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id-1+2}`) 
        .then( (res) => {
            setPokemonsAbilites(res.data.types) //Pega todos os tipos de poderes
            setPokemons(res.data.stats); //Pega Poderes
            setPokemonsImg(res.data.sprites); //Pega Imagens
            setPokemonName(res.data.species.name) //Pega Nome
            setPokemonMoves(res.data.moves) //Pega Movimentos/Ataques
            
        })
        .catch( (err) => {
            console.log(err.data)
        })

    }, [id])
    
    return (
        <div>
            <Header
             disableButtonBack={false}
            />
        
            <CardDetalhesPokemon
                titulo={pokemonName}
                imagemFront={pokemonsImg.front_default}
                imagemBack={pokemonsImg.back_default}
                poderes={pokemons.map((pokemon) => { 
                    return (
                        <div key={pokemon.stat.id}> 
                            <p><strong>{pokemon.stat.name}: </strong>{pokemon.base_stat}</p>
                        </div>
                    )
                })}
                tiposPoderes={pokemonsAbilites.map((typos) => { 
                    return (
                        <div key={typos.slot}> 
                            <p>{typos.type.name}</p>
                        </div>
                    )
                })}
                principaisAtaques={pokemonMoves.map((move, index) => { 
                    return (
                        
                        index < 5 && <p key={move.move.name}>{move.move.name}</p>
                        
                    )
                })}
                
            />
        </div >
    )
} 