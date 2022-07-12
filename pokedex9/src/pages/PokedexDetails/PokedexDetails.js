import { CardDetalhesPokemon } from "../../components/CardDetalhesPokemon/CardDetalhesPokemon";
import { Header } from '../../components/Header/Header';
import { StyleTitlePage } from '../PokedexPage/styled';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react"

export const PokeDexDetails = () => {

    const [pokemons, setPokemons] = useState([]);
    const [pokemonsAbilites, setPokemonsAbilites] = useState([]);
    const [pokemonsImg, setPokemonsImg] = useState([]);
    const [pokemonName, setPokemonName] = useState([]);
    const [pokemonId, setPokemonId] = useState([]);
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const {id} = useParams()

         // Não consegui passar o id como parametro da requisição ainda!
     useEffect(() => {
        setIsLoading(true)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id-1+2}`) 
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

    
    return (
        <div>
            <Header
             disableButtonBack={false}
            />

            {/* Componente Card DetalhesPokemon */}
            <StyleTitlePage>Nome do Pokemon</StyleTitlePage>
            
            <CardDetalhesPokemon
            titulo={pokemonName}
            imagemFront={pokemonsImg.front_default}
            imagemBack={pokemonsImg.back_default}
           
            />
            <h2>Poderes</h2>
            {pokemons.map((pokemon) => { 
                return (
                    <div key={pokemon.stat.name}> 
                        <p><strong>{pokemon.stat.name}: </strong>{pokemon.base_stat}</p>
                    </div>
    )
        })};
           
            {/* <div>
                <img src="#" alt="Imagem Frontal" />
                <img src="#" alt="Imagem de costas" />
            </div> */}
            {/* <div>
                <h2>Poderes</h2>
                <p><strong>Hp: {"#"}</strong></p>
                <p><strong>Attack: {"#"}</strong></p>
                <p><strong>Deffense: {"#"}</strong></p>
                <p><strong>Special-attack: {"#"}</strong></p>
                <p><strong>Special-Defense: {"#"}</strong></p>
                <p><strong>Speed: {"#"}</strong></p>
            </div> */}
            {/* <div>
                <div>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <h2>Principais Ataques</h2>
                    <p>Ataque 1 {"#"}</p>
                    <p>Ataque 2 {"#"}</p>
                    <p>Ataque 3 {"#"}</p>
                    <p>Ataque 4 {"#"}</p>
                    <p>Ataque 5 {"#"}</p>
                </div>
            </div> */}
        </div >
    )
} 