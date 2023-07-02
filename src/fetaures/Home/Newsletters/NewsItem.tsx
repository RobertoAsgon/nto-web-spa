import React from 'react'
import { NewsItemContainer, NewsItemDatePublished, NewsItemTitle } from './styles'
import { INews } from '../../../services/news/newsModel'

interface NewsItemProps {
  news: INews
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
  console.log('player', news)
  return (
    <NewsItemContainer>
      <NewsItemTitle>
        <h3>{news.title}</h3>
        <NewsItemDatePublished>
          <span>Publicado em:</span>
          <p>{news.date}</p>
        </NewsItemDatePublished>
      </NewsItemTitle>

      <div dangerouslySetInnerHTML={{ __html: news.body }}></div>
    </NewsItemContainer>
  )
}

export default NewsItem
