import React from 'react'
import { IGuild } from '../../../services/guild/guildModel'
import { GuildItemContainer } from './styles'

interface GuildItemProps {
  guild: IGuild
}

const GuildItem: React.FC<GuildItemProps> = ({ guild }) => {
  console.log('guild', guild)
  return (
    <GuildItemContainer>
      <p>{guild.name}</p>
      <img src={guild.logo_name} alt="Logo Guild" />
      <p>{guild.last_execute_points}</p>
    </GuildItemContainer>
  )
}

export default GuildItem
