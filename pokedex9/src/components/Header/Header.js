import React from 'react'
import { useNavigate } from 'react-router-dom';
import { StyleMenu, StyleLogo, StyleButton } from './styled'
import { goToHome, goToPokedex, goToBackPage } from '../../rotas/coordenadas'

export function Header (props) {

 const navigate = useNavigate()

  return (
    <StyleMenu>        
      <StyleLogo onClick={() => goToHome(navigate)}>Pokedex</StyleLogo>
      {props.disableButtonBack ? <StyleButton onClick={() => goToPokedex(navigate)}>Ver Pokedex</StyleButton> : <StyleButton onClick={() => goToBackPage(navigate)}>Voltar</StyleButton>}
    </StyleMenu>
    )
}

