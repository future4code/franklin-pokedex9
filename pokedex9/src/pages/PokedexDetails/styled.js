import React from "react";
import styled from 'styled-components';
import { blueColor } from "../../constants/cores";

export const StyleDivImages = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const StyleDivContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 120px;
    margin-right: 60px;
`
export const StyleTitlePage = styled.h2`
    font-size: 38px;
    font-weight: 700;
    text-align: center;
    color: ${blueColor};
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: -60px;
`