import React, { ReactElement } from 'react'
import { NavMenuContainer } from './styles'
import { useIsLoggedUser } from '../../hooks/isLogged'
import { useRouter } from 'next/router'
import ItemMenu from './ItemMenu'
import LoginIcon from '@mui/icons-material/Login'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import SearchIcon from '@mui/icons-material/Search'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import { PAGES_URL } from '../../services/constants'

class MenuItemData {
  constructor(public text: string, public icon: React.JSX.Element, public route = PAGES_URL.HOME) {}
}

const NavMenu: React.FC = () => {
  const isLogged = useIsLoggedUser()
  const router = useRouter()

  const accountText = isLogged ? 'Gerenciar Conta' : 'Login'
  const accountRoute = isLogged ? PAGES_URL.ACCOUNT_MANAGEMENT : PAGES_URL.LOGIN
  const AccountIcon = isLogged ? <SettingsIcon /> : <LoginIcon />

  const navMenuData = [
    new MenuItemData('Inicio', <HomeIcon />, PAGES_URL.HOME),
    new MenuItemData(accountText, AccountIcon, accountRoute),
    new MenuItemData('Investigar', <SearchIcon />, PAGES_URL.CHARACTERS),
    new MenuItemData('Guilds', <SupervisedUserCircleIcon />, PAGES_URL.GUILDS),
    new MenuItemData('Wiki', <TravelExploreIcon />, PAGES_URL.WIKI),
    new MenuItemData('Downloads', <CloudDownloadIcon />, PAGES_URL.DOWNLOADS)
  ]

  const onClickMenuItem = (newRoute: PAGES_URL) => router.push(newRoute)

  return (
    <NavMenuContainer>
      {navMenuData.map((itemMenu) => (
        <ItemMenu text={itemMenu.text} icon={itemMenu.icon} onClick={() => onClickMenuItem(itemMenu.route)} />
      ))}
    </NavMenuContainer>
  )
}

export default NavMenu
