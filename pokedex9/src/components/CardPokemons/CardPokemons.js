import React, { useContext } from 'react'
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

    const addPokemonToPokedex = (newPokemon) => {

        console.log(newPokemon);
        console.log(pokedex);
    }

    const renderedPokemons = pokemons && pokemons.map((pokemon, index) => {
        return (
            // Acredito que teremos que transformar esse card em um componente chamado CardPokemon
            <StyleDiv>
                <div key={pokemon.name}>
                    <StyleTitleCard>{pokemon.name}</StyleTitleCard>
                    {/* <StyleImage src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} /> */}
                    <StyleImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index + 1}.gif`} />
                </div>
                <StyleDivButtonsElements>
                    <StyleButtonBlue onClick={() => addPokemonToPokedex(pokemon.name)}>Adicionar</StyleButtonBlue>
                    <StyleButtonYellow onClick={() => goToPokedexDetails(navigate, index)}>Detalhes</StyleButtonYellow>
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