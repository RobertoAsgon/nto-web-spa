import React from 'react'
import { NavMenuContainer } from './styles'

const NavMenu: React.FC = () => {
  return (
    <NavMenuContainer>
      <div>Login | Logout</div>
      <div>Gerenciar Conta</div>
      <div>Investigar</div>
      <div>Guilds</div>
      <div>Wiki</div>
      <div>Downloads</div>
    </NavMenuContainer>
  )
}

export default NavMenu
