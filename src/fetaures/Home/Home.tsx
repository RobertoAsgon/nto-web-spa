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
      <div>
        <h2>Guilds X</h2>
        {topGuilds.map((guild) => {
          return (
            <div key={guild.id}>
              <span>{guild.name}</span>
            </div>
          )
        })}
      </div>
      <div>
        <h2>Noticias</h2>
        {newsLetter.map((news) => {
          return (
            <div key={news.id}>
              <span>{news.body}</span>
            </div>
          )
        })}
      </div>
    </HomeContainer>
  )
}

export default Home
