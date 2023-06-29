import React, { ReactNode } from 'react'
import { INews } from '../../../services/news/newsModel'

interface INewslettersProps {
  newsLetter: INews[]
}

const Newsletters: React.FC<INewslettersProps> = ({ newsLetter }) => {
  return (
    <>
      <h1>Newsletters</h1>
    </>
  )
}

export default Newsletters
