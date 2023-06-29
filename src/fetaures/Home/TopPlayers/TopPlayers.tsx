import React, { ReactNode } from 'react'
import { INews } from '../../../services/news/newsModel'
import { IPlayer } from '../../../services/player/playerModel'

interface ITopPlayersProps {
  topPlayers: IPlayer[]
}

const TopPlayers: React.FC<ITopPlayersProps> = ({ topPlayers }) => {
  return (
    <>
      <h1>TopPlayers</h1>
    </>
  )
}

export default TopPlayers
