window.supabaseConfig = {
    url: 'https://fvdvhtmtzoprfukhyweo.supabase.co',
    
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2ZHZodG10em9wcmZ1a2h5d2VvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3ODk3MTgsImV4cCI6MjA4NjM2NTcxOH0.w7NQJDdj5WTNn1aKK9Sj89ydiNYpP0Tm8ooNBCMMe1w'
};

if (window.SUPPRESS_VERBOSE === undefined) window.SUPPRESS_VERBOSE = true;
if (window.DEBUG_SUPABASE === undefined) window.DEBUG_SUPABASE = false;
if (window.netlifyIdentity && !window.SUPPRESS_VERBOSE) console.log('Running on Netlify');
if (!window.SUPPRESS_VERBOSE) {
    console.log('Configuration loaded');
    console.log('URL set:', !window.supabaseConfig.url.includes('your-project'));
    console.log('Key set:', !window.supabaseConfig.key.includes('your-anon-key'));
}
