// Supabase Configuration
// Replace these with your actual Supabase project credentials

const SUPABASE_URL = 'https://xhbehtmumxtrnewrdmae.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhoYmVodG11bXh0cm5ld3JkbWFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3ODQ0MzQsImV4cCI6MjA5NDM2MDQzNH0.02qecN1rdjtvkApwy9tue8BhEqH55RQCjieRkZkm0GU';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { supabase };
}
