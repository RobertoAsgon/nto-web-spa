import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { PAGES_URL } from '../services/constants'
import GlobalUiProvider from '../theme/GlobalUiProvider'
import RootContainer from '../components/RootContainer/RootContainer'
import '../theme/global.ts'

const Header = dynamic(() => import('../components/Header/Header'), {
  ssr: false
})

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <GlobalUiProvider>
      <RootContainer>
        <Component {...pageProps} />
      </RootContainer>
    </GlobalUiProvider>
  )
}

export default MyApp
