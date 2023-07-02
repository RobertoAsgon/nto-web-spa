import React, { useState } from 'react'
import { INews } from '../../../services/news/newsModel'
import { NewsItemWrapper, NewslettersContainer } from './styles'
import NewsItem from './NewsItem'

interface INewslettersProps {
  newsLetter: INews[]
}

const Newsletters: React.FC<INewslettersProps> = ({ newsLetter }) => {
  return (
    <NewslettersContainer>
      <NewsItemWrapper>
        {newsLetter.map((news: INews) => (
          <NewsItem news={news} key={news.id} />
        ))}
      </NewsItemWrapper>
    </NewslettersContainer>
  )
}

export default Newsletters
