import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://nrytydhtxrciyenhuqkq.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseAnonKey) {
  console.warn(
    'Supabase anon key is not set. Please add it to your .env.local file:\n' +
    'NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here\n' +
    'See SUPABASE_SETUP.md for instructions.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 