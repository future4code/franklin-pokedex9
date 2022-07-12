import styled from "styled-components";
import { blueColor, whiteColor } from "../../constants/cores";

export const StyleDiv = styled.div`
    display: flex;
    height: auto;
    min-height: 400px;
    width: 340px;
    border-radius: 55px;
    background-color: ${whiteColor};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 20px;
    border: 1px solid #000;
`
export const StyleTitlePage = styled.h2`
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    color: ${blueColor};
    margin-top: 30px;
`
export const StyleParagraph = styled.p`
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    color: #000;
    margin-top: 30px;
    line-height: 2.0;
`
