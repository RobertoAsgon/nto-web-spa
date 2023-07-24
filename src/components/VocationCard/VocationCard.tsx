import React from 'react'
import { VOCATION, VocationModel } from '../../services/player/playerModel'
import { VocationCardContainer } from './style'

interface IVocationCardProps {
  vocationModel: VocationModel
  onSelectVocation: (vocation: VOCATION) => void
  isSelectedVocation: boolean
}

const VocationCard: React.FC<IVocationCardProps> = ({ vocationModel, onSelectVocation, isSelectedVocation }) => (
  <VocationCardContainer $isSelectedCard={isSelectedVocation} onClick={() => onSelectVocation(vocationModel.vocation)}>
    <span>{vocationModel.name}</span>
    <img src={vocationModel.image} alt="Logo Guild" />
  </VocationCardContainer>
)

export default VocationCard
