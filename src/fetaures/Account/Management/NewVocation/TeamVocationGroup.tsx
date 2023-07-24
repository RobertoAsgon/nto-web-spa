import React, { FC } from 'react'
import { VOCATION, VocationModel } from '../../../../services/player/playerModel'
import { dataVocation } from '../../../../services/player/playerData'
import { TeamVocationGroupContainer } from '../style'
import VocationCard from '../../../../components/VocationCard/VocationCard'
import { Radio } from '@mui/material'

interface TeamVocationGroupProps {
  vocationGroup: [VOCATION, VocationModel][]
  title: string
  description: string
  newPlayerVocation: VOCATION // Adicione o tipo da prop newPlayerVocation
  handleSelectNewVocation: (vocation: VOCATION) => void // Adicione o tipo da função handleNewVocation
}

const TeamVocationGroup: FC<TeamVocationGroupProps> = ({
  vocationGroup,
  title,
  description,
  newPlayerVocation,
  handleSelectNewVocation
}) => {
  return (
    <TeamVocationGroupContainer>
      <h2>{title}</h2>
      <p>{description}</p>
      <div style={{ display: 'flex', maxWidth: '100%', flexWrap: 'wrap' }}>
        {Array.from(vocationGroup).map(([vocation, data]) => {
          const isSelectedVocation = vocation === newPlayerVocation
          return (
            <div key={data.name}>
              <VocationCard
                isSelectedVocation={isSelectedVocation}
                onSelectVocation={() => handleSelectNewVocation(vocation)} // Ajuste para passar apenas o valor da vocation
                vocationModel={data}
              />
              <Radio
                name="radioGroup"
                value={data.name}
                checked={isSelectedVocation}
                // onChange={handleChange}
              />
            </div>
          )
        })}
      </div>
    </TeamVocationGroupContainer>
  )
}

export default TeamVocationGroup
