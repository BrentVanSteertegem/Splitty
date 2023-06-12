import { ReactNode, createContext, useContext } from 'react'
import { Session, User } from '@supabase/supabase-js'
import useSupabaseAuth from '../../../../core/api/useSupabaseAuth'

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext<{ auth: Session | null | undefined, isLoggedIn: boolean, user: User | null }>({
  auth: null,
  isLoggedIn: false,
  user: null,
})

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { isInitialized, isLoggedIn, user, auth } = useSupabaseAuth()

  return (
    <AuthContext.Provider value={{ auth, isLoggedIn, user }}>
      {isInitialized ? children : null}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export default AuthProvider