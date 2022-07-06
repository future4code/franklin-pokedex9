import { useNavigate } from 'react-router-dom';
import { goToPokedex } from '../../rotas/coordenadas';
import { goToBackPage } from '../../rotas/coordenadas';

export const PokeDexDetails = () => {

    const navigate = useNavigate()

    return (
        <div>
            {/* Componente Header */}
            <header>
                <button onClick={() => goToBackPage(navigate)}>Voltar</button>
                <h1>Nome do Pokémon</h1>
                <button onClick={() => goToPokedex(navigate)}>Ir para Pokedex</button>
            </header>

            {/* Componente Card DetalhesPokemon */}
            <div>
                <img src="#" alt="Imagem Frontal" />
                <img src="#" alt="Imagem de costas" />
            </div>
            <div>
                <h2>Poderes</h2>
                <p><strong>Hp: {"#"}</strong></p>
                <p><strong>Attack: {"#"}</strong></p>
                <p><strong>Deffense: {"#"}</strong></p>
                <p><strong>Special-attack: {"#"}</strong></p>
                <p><strong>Special-Defense: {"#"}</strong></p>
                <p><strong>Speed: {"#"}</strong></p>
            </div>
            <div>
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
            </div>
        </div >
    )
} 