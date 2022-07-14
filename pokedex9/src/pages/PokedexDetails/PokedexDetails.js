import { CardDetalhesPokemon } from "../../components/CardDetalhesPokemon/CardDetalhesPokemon";
import { Header } from '../../components/Header/Header';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react"
import CardImageFront from "../../components/CardImageFront/CardImageFront";
import CardImageBack from "../../components/CardImageBack/CardImageBack";
import CardPowerAndAttack from "../../components/CardPowerAndAttack/CardPowerAndAttack";
import { StyleDivImages, StyleDivContainer, StyleTitlePage } from "./styled";
import { BASE_URL } from "../../constants/urls";

export const PokeDexDetails = () => {

    const [pokemons, setPokemons] = useState([]);
    const [pokemonsAbilites, setPokemonsAbilites] = useState([]);
    const [pokemonsImg, setPokemonsImg] = useState([]);
    const [pokemonName, setPokemonName] = useState([]);
    const [pokemonMoves, setPokemonMoves] = useState([]);
    const [pokemonId, setPokemonId] = useState([]);
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()
    const [id, setId] = useState();

    // Não consegui passar o id como parametro da requisição ainda!
    useEffect(() => {
        setIsLoading(true)
        axios
            .get(`${BASE_URL}/${params.id}`)
            .then((res) => {
                setPokemonsAbilites(res.data.types) //Pega todos os tipos de poderes
                setIsLoading(false)
                setPokemons(res.data.stats); //Pega Poderes
                setPokemonsImg(res.data.sprites); //Pega Imagens
                setPokemonName(res.data.species.name) //Pega Nome
                setPokemonMoves(res.data.moves) //Pega Movimentos/Ataques
                setPokemonId(res.data.id) //Pega id

            })
            .catch((error) => {
                setIsLoading(false)
                setError("Deu erro", error)
            })

    }, [id])

    return (
        <div>
            <Header
                disableButtonBack={false}
            />
            <StyleTitlePage>{pokemonName}</StyleTitlePage>
            <StyleDivContainer>
                <StyleDivImages>
                    <CardImageFront
                        imagemFront={pokemonsImg.front_default}
                    />
                    <CardImageBack
                        imagemBack={pokemonsImg.back_default}
                    />
                </StyleDivImages>
                <CardDetalhesPokemon
                    poderes={pokemons.map((pokemon) => {
                        return (
                            <div key={pokemon.stat.id}>
                                <p><strong>{pokemon.stat.name}: </strong>{pokemon.base_stat}</p>
                            </div>
                        )
                    })}
                />
                <CardPowerAndAttack
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
            </StyleDivContainer>
        </div>
    )
} 