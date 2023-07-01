import { Button } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox'
import React from 'react'

interface ItemMenuProps {
  text: string
  icon: React.JSX.Element
  onClick: () => void
}

const ItemMenu: React.FC<ItemMenuProps> = ({ text, icon, onClick }) => (
  <div>
    <Button variant="outlined" startIcon={icon} onClick={onClick}>
      {text}
    </Button>
  </div>
)

export default ItemMenu
