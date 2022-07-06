import { useNavigate } from 'react-router-dom';
import { goToPokedex } from '../../rotas/coordenadas';
import { goToPokedexDetails } from '../../rotas/coordenadas';

export const HomePage = () => {

    const navigate = useNavigate()

    return(
        <div>
            {/* Componente Header */}
            <header>
                <button onClick={() => goToPokedex(navigate)}>Ver minha Pokedex</button>
                <h1>Lista de Pokémons</h1>
            </header>

            {/* Componente CardPokemon */}
            <div> <p>POKE CARD</p>
                <button>Adicionar a Pokedex</button>
                <button onClick={() => goToPokedexDetails(navigate)}>Ver detalhes</button>
            </div>
        </div>
    )
} 