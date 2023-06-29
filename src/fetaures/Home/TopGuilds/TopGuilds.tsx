import React, { ReactNode } from 'react'
import { INews } from '../../../services/news/newsModel'
import { IGuild } from '../../../services/guild/guildModel'

interface ITopGuildsProps {
  topGuilds: IGuild[]
}

const TopGuilds: React.FC<ITopGuildsProps> = ({ topGuilds }) => {
  return (
    <>
      <h1>TopGuilds</h1>
    </>
  )
}

export default TopGuilds
