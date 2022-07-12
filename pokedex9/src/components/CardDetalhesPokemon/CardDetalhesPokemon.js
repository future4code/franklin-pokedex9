import React from "react";
import { DetalhesContainer, StyleTitlePage } from "./styled";


const CardDetalhesPokemon = (props) => {
         
    return(
        <div>
            <StyleTitlePage>{props.titulo}</StyleTitlePage>

            <DetalhesContainer>
                <div> 
                    <div>
                        <img src={props.imagemFront} alt="pokemon imagem de frente"/>
                    </div>
                    <div>
                        <img src={props.imagemBack} alt="pokemon imagem de costas"/>
                    </div>
                </div>
                <div>
                    <h2>Poderes</h2>
                    <p>{props.poderes}</p>
                   
                </div>
                <div>
                    <h2>Tipos de Poder</h2>
                    <p>{props.tiposPoderes}</p>

                    <h2>Principais Ataques</h2>
                    <p>{props.principaisAtaques}</p>

                </div>
            </DetalhesContainer>
        </div>
    )        
}

export { CardDetalhesPokemon }