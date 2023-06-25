import React from 'react'
import { ThemeProvider } from 'styled-components'
import { globalTheme } from './globalTheme'
import GlobalStyles from './global'

interface GlobalUiProviderProps {
  children?: React.ReactNode
}

const GlobalUiProvider: React.FC<GlobalUiProviderProps> = ({ children }) => (
  <ThemeProvider theme={globalTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default GlobalUiProvider
