import React, { ReactNode } from 'react'
import { RootMainView, RootContentView, MainContentView, RootNavMenuView } from './styles'
import { PAGES_URL } from '../../services/constants'
import { useRouter } from 'next/router'
import NavMenu from '../NavMenu/NavMenu'

interface RootContainerProps {
  children: ReactNode
}

const RootContainer: React.FC<RootContainerProps> = ({ children }) => {
  const router = useRouter()

  return (
    <RootMainView>
      <MainContentView>
        <RootNavMenuView>{<NavMenu />}</RootNavMenuView>
        <RootContentView>{children}</RootContentView>
      </MainContentView>
    </RootMainView>
  )
}

export default RootContainer
