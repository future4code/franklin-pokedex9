import { useNavigate } from 'react-router-dom';
import { CardPokemon } from '../../components/CardPokemon/CardPokemon';
import { goToPokedex } from '../../rotas/coordenadas';

export const HomePage = () => {

    const navigate = useNavigate()

    return(
        <div>
            {/* Componente Header */}
            <header>
                <button onClick={() => goToPokedex(navigate)}>Ver minha Pokedex</button>
                <h1>Lista de Pokémons</h1>
            </header>

            <CardPokemon/>
            
        </div>
    )
} 