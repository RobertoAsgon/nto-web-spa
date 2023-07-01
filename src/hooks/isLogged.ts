import { useState, useEffect } from 'react'

export const useIsLoggedUser = () => {
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    // handle jwt token
    setIsLogged(true)
  })

  return isLogged
}
