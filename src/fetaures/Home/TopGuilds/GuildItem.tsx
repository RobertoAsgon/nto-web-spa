import React from 'react'
import { IGuild } from '../../../services/guild/guildModel'
import { GuildItemContainer, GuildItemDescription } from './styles'

interface GuildItemProps {
  guild: IGuild
}

const GuildItem: React.FC<GuildItemProps> = ({ guild }) => {
  console.log('guild', guild)
  return (
    <GuildItemContainer>
      <h3>{guild.name}</h3>
      <img src={guild.logo_name} alt="Logo Guild" />
      <GuildItemDescription>
        <p>{guild.last_execute_points}</p>
        <p>Kills</p>
      </GuildItemDescription>
    </GuildItemContainer>
  )
}

export default GuildItem
