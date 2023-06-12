import { useEffect, useState } from 'react'
import { getCurrentSession } from '../modules/auth/api'
import { Session, User } from '@supabase/supabase-js'
import { AuthEvent, supabase } from './supabase'

const useSupabaseAuth = () => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false)
  const [auth, setAuth] = useState<Session | null | undefined>()

  useEffect(() => {
    const checkAuth = async () => {
      const session = await getCurrentSession()
      setAuth(session)
      setIsInitialized(true)
    }
    checkAuth()
  }, [])

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case AuthEvent.SIGNED_IN:
        case AuthEvent.TOKEN_REFRESHED:
          setAuth(session)
          break
        case AuthEvent.SIGNED_OUT:
          setAuth(null)
          break
      }
    })
  }, [])

  const user: User | null = auth ? auth.user : null

  const isLoggedIn = isInitialized && !!auth

  return {
    isInitialized,
    isLoggedIn,
    auth,
    user,
  }
}

export default useSupabaseAuth