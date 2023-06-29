import React, { ReactNode } from 'react'
import { INews } from '../../../services/news/newsModel'
import { IPlayer } from '../../../services/player/playerModel'
import { PlayerItemWrapper, TopPlayersContainer } from './styles'
import PlayerItem from './PlayerItem'

interface ITopPlayersProps {
  topPlayers: IPlayer[]
}

const TopPlayers: React.FC<ITopPlayersProps> = ({ topPlayers }) => {
  console.log('topGuilds', topPlayers)
  return (
    <TopPlayersContainer>
      <h1>Rank Shinobi</h1>

      <PlayerItemWrapper>
        {topPlayers.map((player: IPlayer) => (
          <PlayerItem player={player} key={player.id} />
        ))}
      </PlayerItemWrapper>
    </TopPlayersContainer>
  )
}

export default TopPlayers
