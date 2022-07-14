import { useNavigate } from 'react-router-dom';
import { goToPokedexDetails } from '../../rotas/coordenadas';
import { Header } from '../../components/Header/Header';
import { StyleTitlePage } from './styled';
import { GlobalStateContext } from '../../context/global/GlobalStateContext';
import { useContext, useEffect } from 'react';
import { StyleDiv, StyleTitleCard, StyleImage, StyleDivButtonsElements, StyleButtonYellow, StyleButtonBlue, StyleListCards } from './styled';


export const PokedexPage = () => {

    const navigate = useNavigate()

    const { state, setters } = useContext(GlobalStateContext);
    const { pokedex } = state;
    const { setPokedex } = setters;

    const removePokemonFromPokedex = (pokemonToRemove) => {
        // const index = pokedex.findIndex(i => i === pokemonToRemove);
        // const newPokedex = [...pokedex];
        // newPokedex.splice(index, 1);
        // setPokedex(newPokedex);
        const newPokedex = pokedex.filter(pokemon => pokemon !== pokemonToRemove)
        setPokedex(newPokedex);
        console.log(newPokedex);
    }

    const renderedPokemons = pokedex.map((pokemon, index) => {
        return (
            // Acredito que teremos que transformar esse card em um componente chamado CardPokemon
            <StyleDiv>
                <div key={pokemon.name}>
                    <StyleTitleCard>{pokemon.name}</StyleTitleCard>
                    {/* <StyleImage src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} /> */}
                    <StyleImage src={pokemon.url} />
                </div>
                <StyleDivButtonsElements>
                    <StyleButtonBlue onClick={() => removePokemonFromPokedex(pokemon)}>Remover</StyleButtonBlue>
                    <StyleButtonYellow onClick={() => goToPokedexDetails(navigate, pokemon.name)}>Detalhes</StyleButtonYellow>
                </StyleDivButtonsElements>
            </StyleDiv>
        )
    })

    return (
        <div>
            <Header disableButtonBack={false} />

            <StyleTitlePage>Minha Pokedex</StyleTitlePage>
            <StyleListCards>
                {renderedPokemons}
            </StyleListCards>
        </div>
    )
} 