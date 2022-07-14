import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "../../constants/urls";
import { ContextPokemon } from '../../context/ContextPokemon';
import { GlobalStateContext } from '../../context/global/GlobalStateContext';
import { useRequestData } from '../../hooks/useRequestData';
import { goToPokedexDetails } from "../../rotas/coordenadas";
import { StyleDiv, StyleTitleCard, StyleImage, StyleDivButtonsElements, StyleButtonYellow, StyleButtonBlue, StyleListCards } from './styled';

const CardPokemons = () => {
    const navigate = useNavigate();

    const { state, setters } = useContext(GlobalStateContext);
    const { pokedex } = state;
    const { setPokedex } = setters;

    const [pokemons] = useRequestData(`${BASE_URL}`);

    useEffect(() => {}, pokedex)

    const addPokemonToPokedex = (newPokemon) => {
        const found = Boolean(pokedex.find(pokemon => pokemon.name === newPokemon.name))
        const newPokedex = [...pokedex]
        console.log(newPokedex);

        if (!found) {
            newPokedex.push(newPokemon)
        }

        setPokedex(newPokedex)

        console.log(`Pokemon para adicionar: ${newPokemon}`);
        console.log(`Pesquisa no array: ${found}`);
        console.log(pokedex);
        console.log(newPokedex);
    }

    const renderedPokemons = pokemons && pokemons.map((pokemon, index) => {

        const pokemonUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index + 1}.gif`

        return (
            <StyleDiv>
                <div key={pokemon.name}>
                    <StyleTitleCard>{pokemon.name}</StyleTitleCard>
                    <StyleImage src={pokemonUrl} />
                </div>
                <StyleDivButtonsElements>
                    <StyleButtonBlue onClick={() => addPokemonToPokedex({ name: pokemon.name, url: pokemonUrl })}>Adicionar</StyleButtonBlue>
                    <StyleButtonYellow onClick={() => goToPokedexDetails(navigate, pokemon.name)}>Detalhes</StyleButtonYellow>
                </StyleDivButtonsElements>
            </StyleDiv>
        )
    })

    return (
        <StyleListCards>
            {renderedPokemons}
        </StyleListCards>
    )
}

export { CardPokemons }