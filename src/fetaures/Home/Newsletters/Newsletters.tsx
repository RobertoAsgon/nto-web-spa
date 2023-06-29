import React, { ReactNode } from 'react'
import { INews } from '../../../services/news/newsModel'
import { NewsItemWrapper, NewslettersContainer } from './styles'
import { IPlayer } from '../../../services/player/playerModel'
import NewsItem from './NewsItem'

interface INewslettersProps {
  newsLetter: INews[]
}

const Newsletters: React.FC<INewslettersProps> = ({ newsLetter }) => {
  return (
    <NewslettersContainer>
      <h1>Últimas notícias</h1>

      <NewsItemWrapper>
        {newsLetter.map((news: INews) => (
          <NewsItem news={news} key={news.id} />
        ))}
      </NewsItemWrapper>
    </NewslettersContainer>
  )
}

export default Newsletters
