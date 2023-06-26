import Head from 'next/head'
import dynamic from 'next/dynamic'
import React from 'react'
import { INews } from '../services/news/newsModel'
import { IGuild } from '../services/guild/guildModel'
import { GetServerSideProps } from 'next'
import { getNews } from '../services/news/newsService'
import { getTopGuilds } from '../services/guild/guildService'

const Home = dynamic(() => import('../fetaures/Home/Home'), {
  ssr: true
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
  // const news = await getNews()
  // const topGuilds = await getTopGuilds()

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
    name: 'My Guild',
    ownerid: 10,
    creationdata: 1678041702,
    motd: 'Welcome to our guild!',
    description: 'We are a friendly and active guild.',
    guild_logo: null,
    create_ip: 0,
    balance: 1000000,
    last_execute_points: 0,
    logo_name: 'default.gif'
  }

  return { props: { news: [newsMock, newsMock], topGuilds: [guildmOCK, guildmOCK] } }
}

export default HomePage
