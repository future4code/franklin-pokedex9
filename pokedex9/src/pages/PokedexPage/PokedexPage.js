import { useNavigate } from 'react-router-dom';
import { goToPokedexDetails } from '../../rotas/coordenadas';
import { Header } from '../../components/Header/Header';
import { StyleTitlePage } from './styled';

export const PokedexPage = () => {

    const navigate = useNavigate()

    return(
        <div>
            <Header
             disableButtonBack={false}
            />

            {/* Componente CardPokemon */}
            <div> 
                <StyleTitlePage>Minha Pokedex</StyleTitlePage>
                <button>Remover</button>
                <button onClick={() => goToPokedexDetails(navigate)}>Ver detalhes</button>
            </div>
        </div>
    )
} 