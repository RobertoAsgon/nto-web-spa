import { api } from '../api'
import { IGetNewsResponse } from './newsModel'

const getNews = async (): Promise<IGetNewsResponse> => {
  const response = await api.get<IGetNewsResponse>('getNews')
  return response.data
}

export { getNews }
