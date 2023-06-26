import { HomeContainer } from './styles'
import { INews } from '../../services/news/newsModel'
import { IGuild } from '../../services/guild/guildModel'
import React from 'react'

interface HomeProps {
  newsLetter: INews[]
  topGuilds: IGuild[]
}

const Home: React.FC<HomeProps> = ({ newsLetter, topGuilds }) => {
  console.log('newsLetter:', newsLetter)
  console.log('topGuilds:', topGuilds)
  return (
    <HomeContainer>
      <h1>Home</h1>
    </HomeContainer>
  )
}

export default Home
