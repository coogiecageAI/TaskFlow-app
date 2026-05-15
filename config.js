// TaskFlow - Supabase Configuration
// Replace these values with the Project URL and anon public key from Supabase Dashboard > Settings > API

const SUPABASE_URL = 'https://xhbehtmumxtrnewrdmae.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhoYmVodG11bXh0cm5ld3JkbWFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3ODQ0MzQsImV4cCI6MjA5NDM2MDQzNH0.02qecN1rdjtvkApwy9tue8BhEqH55RQCjieRkZkm0GU';

let taskflowSupabase = null;

function initializeSupabase() {
  if (!window.supabase || typeof window.supabase.createClient !== 'function') {
    console.error('Supabase JS library is not loaded. Include the CDN script before config.js');
    return null;
  }

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('Supabase credentials are missing.');
    return null;
  }

  if (
    SUPABASE_URL === 'YOUR_SUPABASE_PROJECT_URL' ||
    SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_PUBLIC_KEY'
  ) {
    console.error('Supabase credentials still use placeholders. Update config.js with real values from Supabase.');
    return null;
  }

  try {
    taskflowSupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    window.taskflowSupabase = taskflowSupabase;
    return taskflowSupabase;
  } catch (error) {
    console.error('Failed to initialize Supabase:', error);
    return null;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSupabase);
} else {
  initializeSupabase();
}
