import React, { ReactNode } from 'react'
import { INews } from '../../../services/news/newsModel'
import { IGuild } from '../../../services/guild/guildModel'
import GuildItem from './GuildItem'
import { GuildItemWrapper, TopGuildsContainer } from './styles'

interface ITopGuildsProps {
  topGuilds: IGuild[]
}

const TopGuilds: React.FC<ITopGuildsProps> = ({ topGuilds }) => {
  console.log('topGuilds', topGuilds)
  return (
    <TopGuildsContainer>
      <h1>Top Guilds</h1>

      <GuildItemWrapper>
        {topGuilds.map((guild: IGuild) => (
          <GuildItem guild={guild} key={guild.id} />
        ))}
      </GuildItemWrapper>
    </TopGuildsContainer>
  )
}

export default TopGuilds
