import React from 'react'
import { IPlayer } from '../../../services/player/playerModel'
import { PlayerItemContainer } from './styles'

interface PlayerItemProps {
  player: IPlayer
}

const PlayerItem: React.FC<PlayerItemProps> = ({ player }) => {
  console.log('player', player)
  return (
    <PlayerItemContainer>
      <p>{player.name}</p>
      <img src={'https://www.ntoultimate.com.br/layout/images/mini/10.png'} alt="Logo Guild" />
      <p>{player.level}</p>
    </PlayerItemContainer>
  )
}

export default PlayerItem
