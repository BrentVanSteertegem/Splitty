import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Constants from 'expo-constants'

const { SUPABASE_URL, SUPABASE_KEY } = Constants.manifest.extra

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    storage: AsyncStorage,
    detectSessionInUrl: false, // Prevents Supabase from evaluating window.location.href, breaking mobile,
    autoRefreshToken: true,
    persistSession: true,
  },
})

export const AuthEvent = {
  SIGNED_IN: 'SIGNED_IN',
  TOKEN_REFRESHED: 'TOKEN_REFRESHED',
  SIGNED_OUT: 'SIGNED_OUT',
}