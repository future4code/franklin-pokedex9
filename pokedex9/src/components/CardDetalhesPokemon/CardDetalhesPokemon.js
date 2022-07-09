import React from "react";


const CardDetalhesPokemon = (props) => {
         
    return(
        <div>
            <h1>{props.titulo}</h1>
            <div> 
                <div>
                    <img src={props.imagemFront} alt="pokemon imagem de frente"/>
                </div>
                <div>
                    <img src={props.imagemBack} alt="pokemon imagem de costas"/>
                </div>
            </div>
        </div>
    )        
}

export { CardDetalhesPokemon }