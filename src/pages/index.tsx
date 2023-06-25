import React from 'react'
import Head from 'next/head'

import dynamic from 'next/dynamic'

const Home = dynamic(() => import('../fetaures/Home/Home'), {
  ssr: false
})

const HomePage: React.FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <Home />
  </>
)

export default HomePage
