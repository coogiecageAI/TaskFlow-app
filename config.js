// Supabase Configuration for TaskFlow
// Replace YOUR_SUPABASE_URL_HERE and YOUR_SUPABASE_ANON_KEY_HERE with your actual values

(function() {
    'use strict';

    // Your Supabase credentials
    const SUPABASE_URL = 'xhbehtmumxtrnewrdmae.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhoYmVodG11bXh0cm5ld3JkbWFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3ODQ0MzQsImV4cCI6MjA5NDM2MDQzNH0.02qecN1rdjtvkApwy9tue8BhEqH55RQCjieRkZkm0GU';

    // Wait for Supabase library to load, then initialize
    function initSupabase() {
        if (typeof window.supabase === 'undefined') {
            console.error('Supabase library not loaded. Make sure to include the Supabase script before config.js');
            return;
        }

        // Initialize Supabase client globally
        if (typeof window.supabaseClient === 'undefined') {
            window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            // Create alias for backward compatibility
            window.supabase = window.supabaseClient;
        }
    }

    // Initialize immediately if Supabase is already loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSupabase);
    } else {
        initSupabase();
    }
})();
