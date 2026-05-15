// TaskFlow - Supabase Configuration
// IMPORTANT: Replace the placeholder values below with your actual Supabase credentials

// Your Supabase project credentials (get these from Supabase Dashboard > Settings > API)
const SUPABASE_URL = 'https://xhbehtmumxtrnewrdmae.supabase.co';  // Example: 'https://xxxxxxxxxxxxx.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhoYmVodG11bXh0cm5ld3JkbWFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3ODQ0MzQsImV4cCI6MjA5NDM2MDQzNH0.02qecN1rdjtvkApwy9tue8BhEqH55RQCjieRkZkm0GU';  // Long string starting with 'eyJhbGci...'

// Initialize Supabase client
let supabase;

// Function to initialize Supabase
function initializeSupabase() {
    // Check if Supabase library is loaded
    if (typeof window.supabase === 'undefined') {
        console.error('❌ Supabase library not loaded! Make sure the CDN script is included before config.js');
        return false;
    }

    // Check if credentials are configured
    if (SUPABASE_URL === 'YOUR_SUPABASE_URL_HERE' || SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY_HERE') {
        console.error('❌ Supabase credentials not configured! Please update config.js with your actual credentials.');
        return false;
    }

    // Initialize the client
    try {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('✅ Supabase initialized successfully');
        return true;
    } catch (error) {
        console.error('❌ Error initializing Supabase:', error);
        return false;
    }
}

// Auto-initialize when script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSupabase);
} else {
    initializeSupabase();
}
