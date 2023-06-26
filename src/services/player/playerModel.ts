import { IApiResponse } from '../api'

interface IPlayer {
  id: number
  name: string
  group_id: number
  account_id: number
  level: number
  vocation: number
  health: number
  healthmax: number
  experience: number
  lookbody: number
  lookfeet: number
  lookhead: number
  looklegs: number
  looktype: number
  lookaddons: number
  direction: number
  maglevel: number
  mana: number
  manamax: number
  manaspent: number
  soul: number
  town_id: number
  posx: number
  posy: number
  posz: number
  conditions: Buffer | null
  cap: number
  sex: number
  lastlogin: number
  lastip: number
  save: number
  skull: number
  skulltime: number
  lastlogout: number
  blessings: number
  onlinetime: number
  deletion: number
  balance: number
  offlinetraining_time: number
  offlinetraining_skill: number
  stamina: number
  skill_fist: number
  skill_fist_tries: number
  skill_club: number
  skill_club_tries: number
  skill_sword: number
  skill_sword_tries: number
  skill_axe: number
  skill_axe_tries: number
  skill_dist: number
  skill_dist_tries: number
  skill_shielding: number
  skill_shielding_tries: number
  skill_fishing: number
  skill_fishing_tries: number
}

interface IGetRankPlayersResponse extends IApiResponse {
  players: IPlayer[]
}

export type { IPlayer, IGetRankPlayersResponse }
