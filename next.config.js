/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_SUPABASE_URL: 'https://nrytydhtxrciyenhuqkq.supabase.co',
    // The API key should be in .env.local file, not hardcoded here
  },
};

module.exports = nextConfig; 