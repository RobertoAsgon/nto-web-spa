import React from 'react'
import { NewsItemContainer } from './styles'
import { INews } from '../../../services/news/newsModel'

interface NewsItemProps {
  news: INews
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
  console.log('player', news)
  return (
    <NewsItemContainer>
      <div>
        <h1>NewsItem</h1>
      </div>
      <div>
        <h1>NewsItem</h1>
      </div>
    </NewsItemContainer>
  )
}

export default NewsItem
