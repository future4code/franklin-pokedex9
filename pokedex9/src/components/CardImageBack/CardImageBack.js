import React from "react";
import { StyleDiv, StyleImg } from "./styled";

const CardImageBack = (props) => {
    return(
        <StyleDiv>
            <StyleImg src={props.imagemBack} alt="pokemon imagem de frente"/>
        </StyleDiv>
    )
};

export default CardImageBack;