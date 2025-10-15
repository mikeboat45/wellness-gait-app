
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jwekkruczwihxkkxhfxv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3ZWtrcnVjendpaHhra3hoZnh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1MzI3MjcsImV4cCI6MjA3NjEwODcyN30.SnkZqgVHUWxlbm8Ve57KQhT2C6bgEszAOLfImrEnf1w'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
