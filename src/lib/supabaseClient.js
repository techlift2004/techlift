import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fmoyiozigylhzvephakk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtb3lpb3ppZ3lsaHp2ZXBoYWtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwMTQ5MDksImV4cCI6MjA3MzU5MDkwOX0.szvHkovDGaB_k1qG0qQ9xLl41ytTdVHmWjdyM0h47Hs";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);