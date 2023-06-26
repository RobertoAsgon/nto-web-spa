import { IApiResponse } from '../api'

interface INews {
  id: number
  title: string
  body: string
  type: number
  date: number
  category: number
  player_id: number
  last_modified_by: number
  last_modified_date: number
  comments: string
  article_text: string
  article_image: string
  hidden: number
}

interface IGetNewsResponse extends IApiResponse {
  news: INews[]
}

export type { INews, IGetNewsResponse }
