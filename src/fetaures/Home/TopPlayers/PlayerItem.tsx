import React from 'react'
import { IPlayer, VOCATION } from '../../../services/player/playerModel'
import { PlayerItemContainer, PlayerItemDescription } from './styles'

interface PlayerItemProps {
  player: IPlayer
}

const PlayerItem: React.FC<PlayerItemProps> = ({ player }) => {
  console.log('player', player)
  const vocationImage = new Map<VOCATION, string>()

  vocationImage.set(VOCATION.NARUTO, 'https://www.ntoultimate.com.br/layout/images/mini/1.png')
  vocationImage.set(VOCATION.SAKURA, 'https://www.ntoultimate.com.br/layout/images/mini/40.png')
  vocationImage.set(VOCATION.SASUKE, 'https://www.ntoultimate.com.br/layout/images/mini/10.png')
  vocationImage.set(VOCATION.NEJI, 'https://www.ntoultimate.com.br/layout/images/mini/60.png')
  vocationImage.set(VOCATION.LEE, 'https://www.ntoultimate.com.br/layout/images/mini/30.png')
  vocationImage.set(VOCATION.TENTEN, 'https://www.ntoultimate.com.br/layout/images/mini/100.png')
  vocationImage.set(VOCATION.CHOUJI, 'https://www.ntoultimate.com.br/layout/images/mini/180.png')
  vocationImage.set(VOCATION.INO, 'https://www.ntoultimate.com.br/layout/images/mini/360.png')
  vocationImage.set(VOCATION.SHIKAMARU, 'https://www.ntoultimate.com.br/layout/images/mini/80.png')

  return (
    <PlayerItemContainer>
      <h3>{player.name}</h3>
      <img src={vocationImage.get(player.vocation)} alt="Logo Guild" />
      <PlayerItemDescription>
        <p>{player.level}</p>
        <p>Rep.</p>
      </PlayerItemDescription>
    </PlayerItemContainer>
  )
}

export default PlayerItem
