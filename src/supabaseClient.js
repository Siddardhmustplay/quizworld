import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tvzirhubwcmgwachroza.supabase.co/';  // Replace with your actual Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2emlyaHVid2NtZ3dhY2hyb3phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyNTM0NDEsImV4cCI6MjA0MjgyOTQ0MX0.Dt4fUofu9MgETlh3zl29021YzQjebwKiJmcgVPY_G-o';
  // Replace with your Supabase anon public key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
