import { IApiResponse, api } from '../api'
import { IGetRankPlayersResponse, IPlayer } from './playerModel'

const postNewPlayer = async (body: IPlayer): Promise<IApiResponse> => {
  const response = await api.post<IApiResponse>('createPlayer', body)
  return response.data
}

const getRankPlayers = async (): Promise<IGetRankPlayersResponse> => {
  const response = await api.get<IGetRankPlayersResponse>('allPlayers')
  return response.data
}

export { postNewPlayer, getRankPlayers }
