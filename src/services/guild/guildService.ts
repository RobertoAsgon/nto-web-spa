import { IApiResponse, api } from '../api'
import { IGuild, ITopGuildsResponse } from './guildModel'

const postNewGuild = async (body: IGuild): Promise<IApiResponse> => {
  const response = await api.post<IApiResponse>('createGuild', body)
  return response.data
}

const getTopGuilds = async (): Promise<ITopGuildsResponse> => {
  const response = await api.get<ITopGuildsResponse>('rankGuilds')
  return response.data
}

export { postNewGuild, getTopGuilds }
