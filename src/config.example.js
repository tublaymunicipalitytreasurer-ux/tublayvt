/**
 * config.example.js
 * 
 * This is a template for the configuration file.
 * Copy this file to config.js and fill in your Supabase credentials.
 * 
 * IMPORTANT: config.js is gitignored and should NOT be committed to version control.
 */

window.supabaseConfig = {
    // Your Supabase project URL
    url: 'https://your-project-id.supabase.co',
    
    // Your Supabase anonymous (public) key
    key: 'your-anon-key-here'
};

if (window.SUPPRESS_VERBOSE === undefined) window.SUPPRESS_VERBOSE = true;
if (window.DEBUG_SUPABASE === undefined) window.DEBUG_SUPABASE = false;
if (window.netlifyIdentity && !window.SUPPRESS_VERBOSE) console.log('Running on Netlify');
if (!window.SUPPRESS_VERBOSE) {
    console.log('Configuration loaded');
    console.log('URL set:', !window.supabaseConfig.url.includes('your-project'));
    console.log('Key set:', !window.supabaseConfig.key.includes('your-anon-key'));
}
