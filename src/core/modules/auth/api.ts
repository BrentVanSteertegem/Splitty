import { Profile, User } from '../../../app/types'
import { supabase } from '../../api/supabase'
import { getProfile } from '../profile/api'

export const getCurrentSession = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession()
  if (error) {
    return null
  }
  if (session) {
    session.user.user_metadata = await getProfile(session.user.id)
    return session
  }
}

export const register = async ({ email, password, ...rest }: Omit<User, 'id'> & Omit<Profile, 'userId'> ) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  })
  if (error) {
    return Promise.reject(error)
  }
  await Promise.resolve(data)
  return insertProfile({ ...rest })
}

const insertProfile = async ({ username, firstName, lastName, acceptedTerms }: Omit<Profile, 'userId'>) => {
  const { data, error } = await supabase
  .from('Profile')
  .insert([{ 
    username: username,
    firstName: firstName,
    lastName: lastName,
    acceptedTerms: acceptedTerms,
  }])
  if (error) {
    return Promise.reject(error)
  }
  return Promise.resolve(data)
}
  

export const login = async ({ email, password }: Omit<User,'id'>) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })
  if (error) {
    return Promise.reject(error)
  }
  return Promise.resolve(data)
}

export const logout = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) {
    return Promise.reject(error)
  }
  return Promise.resolve()
}