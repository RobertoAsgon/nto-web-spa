import React from 'react'
import { ButtonItemMenu } from './styles'

interface ItemMenuProps {
  text: string
  icon: React.JSX.Element
  onClick: () => void
}

const ItemMenu: React.FC<ItemMenuProps> = ({ text, icon, onClick }) => (
  <ButtonItemMenu variant="outlined" startIcon={icon} onClick={onClick}>
    {text}
  </ButtonItemMenu>
)

export default ItemMenu
