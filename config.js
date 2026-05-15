// TaskFlow - Supabase Configuration
// Replace these with your Supabase project credentials from Settings > API

const SUPABASE_URL = 'https://xhbehtmumxtrnewrdmae.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmVodG11bXh0cm5ld3JkbWFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3ODQ0MzQsImV4cCI6MjA5NDM2MDQzNH0.02qecN1rdjtvkApwy9tue8BhEqH55RQCjieRkZkm0GU';

let supabase = null;

function initializeSupabase() {
  if (typeof window.supabase === 'undefined' || typeof window.supabase.createClient !== 'function') {
    console.error('Supabase library not loaded. Make sure the CDN script is included before config.js');
    return false;
  }

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('Supabase credentials are missing. Update config.js with your actual project values.');
    return false;
  }

  if (SUPABASE_URL.includes('YOUR_SUPABASE_URL_HERE') || SUPABASE_ANON_KEY.includes('YOUR_SUPABASE_ANON_KEY_HERE')) {
    console.error('Supabase credentials still contain placeholders.');
    return false;
  }

  try {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    window.supabaseClient = supabase;
    console.log('Supabase initialized successfully');
    return true;
  } catch (error) {
    console.error('Error initializing Supabase:', error);
    return false;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSupabase);
} else {
  initializeSupabase();
}