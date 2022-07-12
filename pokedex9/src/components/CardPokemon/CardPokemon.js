import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "../../constants/urls";
import { ContextPokemon } from '../../context/ContextPokemon';
import { useRequestData } from '../../hooks/useRequestData';
import { goToPokedexDetails } from "../../rotas/coordenadas";
import { StyleDiv, StyleTitleCard, StyleImage, StyleDivButtonsElements, StyleButtonYellow, StyleButtonBlue, StyleListCards } from './styled';

const CardPokemon = () => {
    const navigate = useNavigate();

    const [pokemons, error, isLoading] = useRequestData(`${BASE_URL}`);

    const poke = useContext(ContextPokemon);

    return (
        <StyleListCards>
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p>Ocorreu um erro</p>}
            {!isLoading && pokemons && pokemons.length > 0 &&
                pokemons.map((pokemon, index) => {
                    return (
                        <StyleDiv>
                            <div key={pokemon.name}>
                                <StyleTitleCard>{pokemon.name}</StyleTitleCard>
                                {/* <StyleImage src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} /> */}
                                <StyleImage src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index + 1}.gif`} />
                            </div>
                            <StyleDivButtonsElements>
                                <StyleButtonBlue>Adicionar</StyleButtonBlue>
                                <StyleButtonYellow onClick={() => goToPokedexDetails(navigate, index)}>Detalhes</StyleButtonYellow>
                            </StyleDivButtonsElements>
                        </StyleDiv>
                    );
                }
                )}
                <div>
                    <p>{poke.nome}</p>
                    <img src={poke.imagem} alt="" />
                </div>
        </StyleListCards>
    )
}

export { CardPokemon }