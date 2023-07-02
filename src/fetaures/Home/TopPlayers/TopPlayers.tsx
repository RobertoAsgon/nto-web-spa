import React, { ReactNode } from 'react'
import { INews } from '../../../services/news/newsModel'
import { IPlayer } from '../../../services/player/playerModel'
import { PlayerItemWrapper, TopPlayersContainer } from './styles'
import PlayerItem from './PlayerItem'

interface ITopPlayersProps {
  topPlayers: IPlayer[]
}

const TopPlayers: React.FC<ITopPlayersProps> = ({ topPlayers }) => {
  const QTTY_MAX_PLAYERS = 4
  return (
    <TopPlayersContainer>
      <PlayerItemWrapper>
        {topPlayers.slice(0, QTTY_MAX_PLAYERS).map((player: IPlayer) => (
          <PlayerItem player={player} key={player.id} />
        ))}
      </PlayerItemWrapper>
    </TopPlayersContainer>
  )
}

export default TopPlayers
