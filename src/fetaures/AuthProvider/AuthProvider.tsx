import React, { createContext, useState, useEffect } from 'react'

interface User {
  id: string
  email: string
  // outras propriedades do usuário
}

interface AuthContextProps {
  isAuthenticated: boolean
  user: User | null
  login: (token: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {}
})

interface Props {
  children: React.ReactNode
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const login = (token: string) => {
    // Decodifique o token JWT para obter as informações do usuário
    const decodedToken = decodeToken(token)

    // Defina o usuário autenticado
    if (decodedToken) {
      const { id, email } = decodedToken
      setUser({ id, email })
      setIsAuthenticated(true)
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
  }

  // Verifique a autenticação ao carregar o componente
  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      login(token)
    }
  }, [])

  return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>
}

// Função auxiliar para decodificar o token JWT
function decodeToken(token: string): any {
  // Implemente a lógica de decodificação do token JWT aqui
  // Você pode usar bibliotecas como jsonwebtoken para decodificar o token
  return null
}
