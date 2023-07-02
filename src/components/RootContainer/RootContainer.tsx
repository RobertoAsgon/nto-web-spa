import React, { ReactNode } from 'react'
import { RootMainView, RootContentView, MainContentView, RootNavMenuView, HeaderContentView } from './styles'
import { useRouter } from 'next/router'
import NavMenu from '../NavMenu/NavMenu'
import HomeSlider from '../HomeSlider/HomeSlider'

interface RootContainerProps {
  children: ReactNode
}

const RootContainer: React.FC<RootContainerProps> = ({ children }) => {
  return (
    <RootMainView>
      <HeaderContentView>
        <HomeSlider />
      </HeaderContentView>
      <MainContentView>
        <RootNavMenuView>{<NavMenu />}</RootNavMenuView>
        <RootContentView>{children}</RootContentView>
      </MainContentView>
    </RootMainView>
  )
}

export default RootContainer
