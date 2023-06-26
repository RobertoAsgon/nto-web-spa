import { IApiResponse } from '../api'

interface IGuild {
  id: number
  name: string
  ownerid: number
  creationdata: number
  motd: string
  description: string
  guild_logo: Blob | null
  create_ip: number
  balance: number
  last_execute_points: number
  logo_name: string
}

interface ITopGuildsResponse extends IApiResponse {
  topGuilds: IGuild[]
}
export type { IGuild, ITopGuildsResponse }
