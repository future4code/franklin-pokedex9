import React from "react";
import { StyleDiv, StyleTitlePage, StyleParagraph } from "./styled";

const CardDetalhesPokemon = (props) => {

    return (
        <StyleDiv>
                <div>
                    <StyleTitlePage>Poderes</StyleTitlePage>
                    <StyleParagraph>{props.poderes}</StyleParagraph>
                </div>
        </StyleDiv>
    )
}

export { CardDetalhesPokemon }