import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "../../constants/urls";
import { goToPokedexDetails } from "../../rotas/coordenadas";

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
                <div>
                    <div key={poke.name}>
                        <p><strong>{poke.name}</strong></p>
                        {/* Precisa de outra requisição pra pegar a imagem */}
                        <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'/>
                    </div>
                    <div>
                        <button onClick={() => goToPokedexDetails(navigate)}>Ver Detalhes</button>
                        <button>Adicionar a Pokedex</button>
                    </div>
                </div>
               
            );

        }
        );
    }

    return (
        <div>
            {renderPersonagens()}
        </div>
    )
}

export {CardPokemon}