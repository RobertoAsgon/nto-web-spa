import Head from 'next/head'
import dynamic from 'next/dynamic'
import React from 'react'
import { INews } from '../services/news/newsModel'
import { IGuild } from '../services/guild/guildModel'
import { GetServerSideProps } from 'next'
import { IPlayer } from '../services/player/playerModel'
import { mockPlayers } from '../services/player/__mocks__/mockPlayer'
import { mockGuilds } from '../services/guild/__mocks__/mockGuild'
import { mockNews } from '../services/news/__mocks__/mockNews'

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

  return {
    props: {
      news: mockNews,
      topGuilds: mockGuilds,
      topPlayers: mockPlayers
    }
  }
}

export default HomePage
