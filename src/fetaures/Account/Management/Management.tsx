import React, { useState, ChangeEvent } from 'react'
import { VOCATION, VocationModel } from '../../../services/player/playerModel'
import { dataVocation } from '../../../services/player/playerData'
import VocationCard from '../../../components/VocationCard/VocationCard'
import { Button, Input, InputAdornment, Radio } from '@mui/material'
import { TeamVocationGroupContainer } from './style'
import CreateIcon from '@mui/icons-material/Create'
import AddIcon from '@mui/icons-material/Add'
import NewVocation from './NewVocation/NewVocation'

const Management: React.FC = () => {
  return (
    <div>
      <div>
        <h1>Conta NTO Global</h1>
      </div>
      <div>
        <div>
          <p>Email</p>
          <span>teste@teste</span>
        </div>
        <div>
          <p>Senha:</p>
          <span>123</span>
        </div>
        <div>
          <p>Premium Points</p>
          <span>0</span>
        </div>
      </div>
      <div>
        <h1>Personagens:</h1>
      </div>
      <NewVocation title="Crie um novo personagem!" />
    </div>
  )
}

export default Management
