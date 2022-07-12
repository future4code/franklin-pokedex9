import { CardPokemon } from '../../components/CardPokemon/CardPokemon';
import { Header } from '../../components/Header/Header';
import { StyleTitlePage } from './styled';

export const HomePage = () => {

    return (
        <div>
            <Header disableButtonBack={true} />
            <StyleTitlePage>Lista de Pokemons</StyleTitlePage>
            <CardPokemon />
        </div>
    )
} 