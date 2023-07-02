import React from 'react'
import { HomeContainer } from './styles'
import { INews } from '../../services/news/newsModel'
import { IGuild } from '../../services/guild/guildModel'
import { IPlayer } from '../../services/player/playerModel'
import TopGuilds from './TopGuilds/TopGuilds'
import TopPlayers from './TopPlayers/TopPlayers'
import Newsletters from './Newsletters/Newsletters'
import HomeSlider from '../../components/HomeSlider/HomeSlider'

interface HomeProps {
  newsLetter: INews[]
  topGuilds: IGuild[]
  topPlayers: IPlayer[]
}

const Home: React.FC<HomeProps> = ({ newsLetter, topGuilds, topPlayers }) => {
  return (
    <HomeContainer>
      <HomeSlider />
      <TopGuilds topGuilds={topGuilds} />
      <TopPlayers topPlayers={topPlayers} />
      <Newsletters newsLetter={newsLetter} />
    </HomeContainer>
  )
}

export default Home
