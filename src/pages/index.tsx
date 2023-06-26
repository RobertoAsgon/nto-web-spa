import Head from 'next/head'
import dynamic from 'next/dynamic'
import React from 'react'
import { INews } from '../services/news/newsModel'
import { IGuild } from '../services/guild/guildModel'
import { GetServerSideProps } from 'next'
import { getNews } from '../services/news/newsService'
import { getTopGuilds } from '../services/guild/guildService'

const Home = dynamic(() => import('../fetaures/Home/Home'), {
  ssr: false
})

export interface HomeServerSideProps {
  news: INews[]
  topGuilds: IGuild[]
}

const HomePage: React.FC<HomeServerSideProps> = ({ news, topGuilds }) => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Home newsLetter={news} topGuilds={topGuilds} />
  </>
)

export const getServerSideProps: GetServerSideProps<HomeServerSideProps> = async () => {
  const [{ news }, { topGuilds }] = await Promise.all([getNews(), getTopGuilds()])

  return { props: { news, topGuilds } }
}

export default HomePage
