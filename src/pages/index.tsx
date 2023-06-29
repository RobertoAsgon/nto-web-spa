import Head from 'next/head'
import dynamic from 'next/dynamic'
import React from 'react'
import { INews } from '../services/news/newsModel'
import { IGuild } from '../services/guild/guildModel'
import { GetServerSideProps } from 'next'
import { IPlayer } from '../services/player/playerModel'

const Home = dynamic(() => import('../fetaures/Home/Home'), {
  ssr: true
})

export interface HomeServerSideProps {
  news: INews[]
  topGuilds: IGuild[]
  topPlayers: IPlayer[]
}

const HomePage: React.FC<HomeServerSideProps> = ({ news, topGuilds, topPlayers }) => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Home newsLetter={news} topPlayers={topPlayers} topGuilds={topGuilds} />
  </>
)

export const getServerSideProps: GetServerSideProps<HomeServerSideProps> = async () => {
  // const news = await getNews()
  // const topGuilds = await getTopGuilds()

  const mockPlayer = {
    id: 1,
    name: 'John Doe',
    group_id: 2,
    account_id: 3,
    level: 50,
    vocation: 4,
    health: 100,
    healthmax: 100,
    experience: 10000,
    lookbody: 128,
    lookfeet: 129,
    lookhead: 130,
    looklegs: 131,
    looktype: 132,
    lookaddons: 0,
    direction: 3,
    maglevel: 30,
    mana: 200,
    manamax: 200,
    manaspent: 200,
    soul: 100,
    town_id: 5,
    posx: 10,
    posy: 20,
    posz: 7,
    conditions: null,
    cap: 200,
    sex: 0,
    lastlogin: 1234567890,
    lastip: 19216801,
    save: 1,
    skull: 0,
    skulltime: 0,
    lastlogout: 1234567890,
    blessings: 3,
    onlinetime: 3600,
    deletion: 0,
    balance: 1000,
    offlinetraining_time: 18000,
    offlinetraining_skill: 2,
    stamina: 25000,
    skill_fist: 80,
    skill_fist_tries: 100,
    skill_club: 90,
    skill_club_tries: 110,
    skill_sword: 85,
    skill_sword_tries: 105,
    skill_axe: 75,
    skill_axe_tries: 95,
    skill_dist: 95,
    skill_dist_tries: 115,
    skill_shielding: 80,
    skill_shielding_tries: 100,
    skill_fishing: 70,
    skill_fishing_tries: 90
  }

  const newsMock: INews = {
    id: 1,
    title: 'Hello!',
    body: 'MyAAC is just READY to use!',
    type: 1,
    date: 1678041702,
    category: 2,
    player_id: 14,
    last_modified_by: 0,
    last_modified_date: 0,
    comments: 'https://my-aac.org',
    article_text: '',
    article_image: '',
    hidden: 0
  }

  const guildmOCK: IGuild = {
    id: 1,
    name: 'Guild Name',
    ownerid: 10,
    creationdata: 1678041702,
    motd: 'Welcome to our guild!',
    description: 'We are a friendly and active guild.',
    guild_logo: null,
    create_ip: 0,
    balance: 1000000,
    last_execute_points: 999999,
    logo_name: 'https://i.stack.imgur.com/8A1zI.gif'
  }

  return {
    props: {
      news: [newsMock, newsMock, newsMock],
      topGuilds: [guildmOCK, guildmOCK, guildmOCK, guildmOCK, guildmOCK],
      topPlayers: [mockPlayer, mockPlayer, mockPlayer, mockPlayer, mockPlayer]
    }
  }
}

export default HomePage
