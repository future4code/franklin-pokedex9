import styled from 'styled-components'
import { blueColor, redColor, whiteColor } from '../../constants/cores'

export const StyleMenu = styled.div`
  width: auto;
  height: 100px;
  padding: 25px;
  background-color: ${blueColor};
  align-items: center;    
  display: flex;
  justify-content: space-between; 
`

export const StyleLogo = styled.h1`
color: ${whiteColor};
background-color: none;
text-decoration: none;
font-size: 35px;
margin-left: 40px;
cursor: pointer;
`

export const StyleButton = styled.button`
    background-color: ${redColor};
    border-radius: 25px;
    width: 130px;
    height: 42px;
    font-size: 15px;
    font-weight: 700;
    border: none;
    color: ${whiteColor};
    cursor: pointer;
`