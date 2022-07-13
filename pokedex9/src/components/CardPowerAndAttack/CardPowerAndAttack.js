import React from "react";
import { StyleDiv, StyleDivAttack, StyleTitlePage, StyleParagraph } from "./styled";

const CardPowerAndAttack = (props) => {
    return(
        <div>
            <StyleDiv>
                    <StyleTitlePage>Tipos de Poder</StyleTitlePage>
                    <StyleParagraph>{props.tiposPoderes}</StyleParagraph>
            </StyleDiv>
            <StyleDivAttack>
                <StyleTitlePage>Principais Ataques</StyleTitlePage>
                <StyleParagraph>{props.principaisAtaques}</StyleParagraph>
            </StyleDivAttack>
        </div>
    )
};

export default CardPowerAndAttack;