import { supabase } from '../../api/supabase'
import { Bill } from '../../../app/types'

export const getBills = async (userId: string) => {
  return await supabase
  .from('Bill')
  .select('*')
  .eq('user_id', userId)
  .order('id', { ascending: false })
  .throwOnError()
}

export const getLatestBillId = async (userId: string) => {
  return await supabase
  .from('Bill')
  .select('id')
  .eq('user_id', userId)
  .order('id', { ascending: false })
  .limit(1)
  .single()
  .throwOnError()
}

export const saveBill = async (bill: Bill) => {
  return await supabase
  .from('Bill')
  .insert({
    bill: JSON.stringify(bill)
  })
  .throwOnError()
}

export const updateBill = async (bill: Bill) => {
  return await supabase
  .from('Bill')
  .update({
    bill: JSON.stringify(bill)
  })
  .eq('id', bill.id)
  .throwOnError()
}

export const deleteBills = async (userId: string) => {
  return await supabase
  .from('Bill')
  .delete()
  .eq('user_id', userId)
  .throwOnError()
}