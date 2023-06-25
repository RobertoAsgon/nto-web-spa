import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { PAGES_URL } from '../lib/constants'
import GlobalUiProvider from '../theme/GlobalUiProvider'

const Header = dynamic(() => import('../components/Header/Header'), {
  ssr: false
})

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const pagesWithHeader = [PAGES_URL.HOME]
  return (
    <GlobalUiProvider>
      {pagesWithHeader.includes(router.pathname as PAGES_URL) && <Header />}
      <Component {...pageProps} />
    </GlobalUiProvider>
  )
}

export default MyApp
