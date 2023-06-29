import React, { ReactNode } from 'react'
import { RootMainView, RootContentView, MainContentView, RootNavMenuView } from './styles'
import { PAGES_URL } from '../../libs/constants'
import { useRouter } from 'next/router'
import NavMenu from '../NavMenu/NavMenu'

interface RootContainerProps {
  children: ReactNode
}

const RootContainer: React.FC<RootContainerProps> = ({ children }) => {
  const pagesWithMenuNavigation = [PAGES_URL.HOME]
  const router = useRouter()

  return (
    <RootMainView>
      <MainContentView>
        <RootNavMenuView>{pagesWithMenuNavigation.includes(router.pathname as PAGES_URL) && <NavMenu />}</RootNavMenuView>
        <RootContentView>{children}</RootContentView>
      </MainContentView>
    </RootMainView>
  )
}

export default RootContainer
