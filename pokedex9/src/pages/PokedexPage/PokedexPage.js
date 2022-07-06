import { useNavigate } from 'react-router-dom';
import { goToBackPage } from '../../rotas/coordenadas';
import { goToPokedexDetails } from '../../rotas/coordenadas';

export const PokedexPage = () => {

    const navigate = useNavigate()

    return(
        <div>
            {/* Componente Header */}
            <header>
                <button onClick={() => goToBackPage(navigate)}>Voltar para lista de pokemons</button>
                <h1>Pokedex</h1>
            </header>

            {/* Componente CardPokemon */}
            <div> <p>POKE CARD</p>
                <button>Adicionar a Pokedex</button>
                <button onClick={() => goToPokedexDetails(navigate)}>Ver detalhes</button>
            </div>
        </div>
    )
} 