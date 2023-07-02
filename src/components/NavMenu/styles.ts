import styled from 'styled-components'
import { Button } from '@mui/material'

const NavMenuContainer = styled.aside`
  display: flex;
  flex-direction: column;

  :hover {
    background-color: #02172c59;
  }
`

const ButtonItemMenu = styled(Button)`
  display: flex;
  color: white;
  height: 60px;
`

export { NavMenuContainer, ButtonItemMenu }
