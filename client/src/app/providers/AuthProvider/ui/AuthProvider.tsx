import { ReactNode, useEffect } from "react"
import { FetchUserData } from "src/entities/User/API/FetchUserData"
import { AuthContext } from "src/shared/context/AuthProvider/AuthContext"
import { UserData } from "src/shared/context/AuthProvider/UserData"
import { useAuth } from "src/shared/context/AuthProvider/useAuth"

interface AuthProviderProps { children: ReactNode }

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useAuth()
  const data = UserData(1)

  useEffect(() => {
    console.log(auth)
    FetchUserData()
      .then(data => data && auth.user === data)
      .catch(err => console.error(`Fetching user, after re-rende is invalid - ${err}`))
  })

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}