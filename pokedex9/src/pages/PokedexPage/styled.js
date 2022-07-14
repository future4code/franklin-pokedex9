import styled from "styled-components";
import { blueColor,  yellowColor, whiteColor} from "../../constants/cores";

export const StyleTitlePage = styled.h2`
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    color: ${blueColor};
    margin-top: 40px;
    
`

export const StyleDiv = styled.div`
    display: flex;
    height: auto;
    min-height: 350px;
    width: 300px;
    border-radius: 55px;
    background-color: ${whiteColor};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 20px;
    border: 1px solid #000;
`

export const StyleDivButtonsElements = styled.div`
    display: flex;
    gap: 15px;      
`
export const StyleTitleCard = styled.p`
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    color: ${blueColor};

`

export const StyleImage = styled.img`
    width: 130px;
    height: 130px;
    margin-top: 15px;
    margin-bottom: 15px;
`

export const StyleButtonYellow = styled.button`
    background-color: ${yellowColor}; 
    border-radius: 25px;
    width: 110px;
    height: 42px;
    font-size: 15px;
    font-weight: 700;
    color: ${blueColor};
    cursor: pointer;
    border: none;
`

export const StyleButtonBlue = styled.button`
    background-color: ${blueColor}; 
    border-radius: 25px;
    width: 110px;
    height: 42px;
    font-size: 15px;
    font-weight: 600;
    color: ${whiteColor};
    cursor: pointer;
`

export const StyleListCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 60px;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    max-width: 1200px;
    margin-top: 30px;
`

