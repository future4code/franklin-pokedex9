import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "../../constants/urls";
import { goToPokedexDetails } from "../../rotas/coordenadas";
import { StyleDiv, StyleTitleCard, StyleImage, StyleDivButtonsElements, StyleButtonYellow, StyleButtonBlue, StyleListCards } from './styled';

const CardPokemon = () => {
    const navigate = useNavigate();

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {

        axios.get(`${BASE_URL}pokemon/`)
        .then((response) => {
            console.log(response.data.results)
            setPokemon(response.data.results)
        })
        .catch((error) => {
            console.log(error)
        })

    }, [])
    
    // Mostra o personagem na tela

    const renderPersonagens = () => {
        return pokemon.map(poke => {
            return (
                    <StyleDiv>
                    <div key={poke.name}>
                        <StyleTitleCard>{poke.name}</StyleTitleCard>
                        {/* Precisa de outra requisição pra pegar a imagem */}
                        <StyleImage src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'/>
                    </div>
                    <StyleDivButtonsElements>
                        <StyleButtonBlue>Adicionar</StyleButtonBlue>
                        <StyleButtonYellow onClick={() => goToPokedexDetails(navigate)}>Detalhes</StyleButtonYellow>   
                    </StyleDivButtonsElements>
                    </StyleDiv>
            );

        }
        );
    }

    return (
        <StyleListCards>
            {renderPersonagens()}
        </StyleListCards>
    )
}

export {CardPokemon}