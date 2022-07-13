import React from "react";
import { StyleDiv, StyleImg } from "./styled";

const CardImageFront = (props) => {
    return(
        <StyleDiv>
            <StyleImg src={props.imagemFront} alt="pokemon imagem de frente"/>
        </StyleDiv>
    )
};

export default CardImageFront;