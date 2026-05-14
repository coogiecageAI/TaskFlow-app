// Supabase Configuration
// Replace these with your actual Supabase project credentials

const SUPABASE_URL = 'https://xhbehtmumxtrnewrdmae.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_578ANJwrTu4PUOdF0PCdrQ_rPzGffMR';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { supabase };
}
