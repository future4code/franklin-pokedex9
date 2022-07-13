import styled from 'styled-components'
import { blueColor, yellowColor, whiteColor } from '../../constants/cores'

export const StyleDiv = styled.div`
    display: flex;
    height: 160px;
    width: 170px;
    border-radius: 30px;
    background-color: ${whiteColor};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 20px;
    border: 1px solid #000;
`

export const StyleImg = styled.img`
    display: flex;
    width: 160px;
    height: 160px;
    margin-top: 10px;
`