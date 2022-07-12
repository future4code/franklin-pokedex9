import styled from 'styled-components';
import { whiteColor, blueColor } from "../../constants/cores";

export const StyleDiv = styled.div`
    display: flex;
    height: auto;
    min-height: 200px;
    width: 320px;
    border-radius: 55px;
    background-color: ${whiteColor};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 20px;
    border: 1px solid #000;
    margin-bottom: 10px;
`
export const StyleDivAttack = styled.div`
    display: flex;
    height: auto;
    min-height: 250px;
    width: 320px;
    border-radius: 55px;
    background-color: ${whiteColor};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 20px;
    border: 1px solid #000;
    margin-top: 30px;
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
    font-weight: 600;
    text-align: center;
    color: #000;
    margin-top: 30px;
    line-height: 2.0;
`
