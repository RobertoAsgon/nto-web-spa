import React, { FC, useState, ChangeEvent, useMemo } from 'react'
import { VOCATION, VocationModel } from '../../../../services/player/playerModel'
import { dataVocation } from '../../../../services/player/playerData'
import { TeamVocationGroupContainer } from '../style'
import VocationCard from '../../../../components/VocationCard/VocationCard'
import { Button, Input, InputAdornment, Radio } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import AddIcon from '@mui/icons-material/Add'
import TeamVocationGroup from './TeamVocationGroup'

interface NewVocationProps {
  title: string
}

const NewVocation: FC<NewVocationProps> = ({ title }) => {
  const [newPlayerName, setNewPlayerName] = useState('')
  const [newPlayerVocation, setNewPlayerVocation] = useState(VOCATION.NARUTO)

  const handleNewPlayerName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setNewPlayerName(value)
  }

  const handleNewVocation = (vocation: VOCATION) => {
    setNewPlayerVocation(vocation)
  }

  const classicTeam7 = Array.from(dataVocation).slice(0, 3)
  const classicTeam8 = Array.from(dataVocation).slice(3, 6)
  const classicTeam9 = Array.from(dataVocation).slice(6, 9)
  const classicTeam10 = Array.from(dataVocation).slice(9, 12)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>{title}</h1>

      <Input
        value={newPlayerName}
        onChange={handleNewPlayerName}
        placeholder="Nome do personagem"
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <CreateIcon />
          </InputAdornment>
        }
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        <TeamVocationGroup
          title="Time 7"
          description="Time equilibrado, especializado em combinação de habilidades:"
          vocationGroup={classicTeam7}
          newPlayerVocation={newPlayerVocation}
          handleSelectNewVocation={handleNewVocation}
        />

        <TeamVocationGroup
          title="Time 8"
          description="Time especializado em rastreamento e ataques furtivos composto:"
          vocationGroup={classicTeam8}
          newPlayerVocation={newPlayerVocation}
          handleSelectNewVocation={handleNewVocation}
        />

        <TeamVocationGroup
          title="Time 9"
          description="Time rigorosamente no Taijutsu (combate corpo-a-corpo) e resistência:"
          vocationGroup={classicTeam9}
          newPlayerVocation={newPlayerVocation}
          handleSelectNewVocation={handleNewVocation}
        />

        <TeamVocationGroup
          title="Time 10"
          description="Time especialista em trabalho de equipe e ataques combinados:"
          vocationGroup={classicTeam10}
          newPlayerVocation={newPlayerVocation}
          handleSelectNewVocation={handleNewVocation}
        />
      </div>

      <Button variant="contained" startIcon={<AddIcon />}>
        Criar Personagem
      </Button>
    </div>
  )
}

export default NewVocation
