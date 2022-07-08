import { CardDetalhesPokemon } from "../../components/CardDetalhesPokemon/CardDetalhesPokemon";
import { Header } from '../../components/Header/Header';
import { StyleTitlePage } from '../PokedexPage/styled';

export const PokeDexDetails = () => {

    return (
        <div>
            <Header
             disableButtonBack={false}
            />

            {/* Componente Card DetalhesPokemon */}
            <StyleTitlePage>Nome do Pokemon</StyleTitlePage>
            
            <CardDetalhesPokemon/>




            {/* <div>
                <img src="#" alt="Imagem Frontal" />
                <img src="#" alt="Imagem de costas" />
            </div> */}
            {/* <div>
                <h2>Poderes</h2>
                <p><strong>Hp: {"#"}</strong></p>
                <p><strong>Attack: {"#"}</strong></p>
                <p><strong>Deffense: {"#"}</strong></p>
                <p><strong>Special-attack: {"#"}</strong></p>
                <p><strong>Special-Defense: {"#"}</strong></p>
                <p><strong>Speed: {"#"}</strong></p>
            </div> */}
            {/* <div>
                <div>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <h2>Principais Ataques</h2>
                    <p>Ataque 1 {"#"}</p>
                    <p>Ataque 2 {"#"}</p>
                    <p>Ataque 3 {"#"}</p>
                    <p>Ataque 4 {"#"}</p>
                    <p>Ataque 5 {"#"}</p>
                </div>
            </div> */}
        </div >
    )
} 