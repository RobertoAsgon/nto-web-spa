import { IApiResponse } from '../api'

export enum VOCATION {
  NARUTO = 1,
  SAKURA = 2,
  SASUKE = 3,
  //
  NEJI = 4,
  LEE = 5,
  TENTEN = 6,
  //
  CHOUJI = 7,
  INO = 8,
  SHIKAMARU = 9,
  //
  KIBA = 10,
  HINATA = 11,
  SHINO = 12
}

export class VocationModel {
  constructor(public name: string, public vocation: VOCATION, public image: string) {}
}

interface IPlayer {
  id: number
  name: string
  group_id: number
  account_id: number
  level: number
  vocation: VOCATION
  healthmax: number
  experience: number
  looktype: number
  maglevel: number
  manamax: number
  soul: number
  cap: number
  lastlogin: number
  lastlogout: number
  onlinetime: number
  stamina: number
  skill_fist: number
  skill_club: number
  skill_sword: number
  skill_axe: number
  skill_dist: number
  skill_shielding: number
  skill_fishing: number
}

interface IGetRankPlayersResponse extends IApiResponse {
  players: IPlayer[]
}

export type { IPlayer, IGetRankPlayersResponse }
