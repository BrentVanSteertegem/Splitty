import { supabase } from '../../api/supabase'

export const getProfile = async (id: string) => {
  return await supabase
  .from('Profile')
  .select('*')
  .eq('user_id', id)
  .single()
  .throwOnError()
}