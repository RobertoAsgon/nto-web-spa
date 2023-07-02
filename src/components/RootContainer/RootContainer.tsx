import React, { ReactNode } from 'react'
import { RootMainView, RootContentView, MainContentView, RootNavMenuView } from './styles'
import NavMenu from '../NavMenu/NavMenu'
import HomeSlider from '../HomeSlider/HomeSlider'

interface RootContainerProps {
  children: ReactNode
}

const RootContainer: React.FC<RootContainerProps> = ({ children }) => (
  <RootMainView>
    <MainContentView>
      <RootNavMenuView>
        <NavMenu />
      </RootNavMenuView>
      <RootContentView>{children}</RootContentView>
    </MainContentView>
  </RootMainView>
)

export default RootContainer
