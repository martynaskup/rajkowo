# Supabase Setup Guide

## Important Security Notice

This project uses Supabase for database functionality. To keep your database secure, follow these steps:

1. **Never commit API keys or sensitive credentials to Git**
2. **Always use environment variables for sensitive data**

## Setup Instructions

### 1. Create a local environment file

Create a file called `.env.local` in the root of the project with the following content:

```
NEXT_PUBLIC_SUPABASE_URL=https://nrytydhtxrciyenhuqkq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

Replace `your_anon_key_here` with your actual Supabase anon key from your Supabase project settings.

### 2. Where to find your Supabase credentials

1. Go to [https://nrytydhtxrciyenhuqkq.supabase.co](https://nrytydhtxrciyenhuqkq.supabase.co)
2. Navigate to Project Settings > API
3. Copy the `anon` public key (it starts with "eyJh...")
4. Paste it into your `.env.local` file

### 3. Set up database tables

Connect to your Supabase database and create the necessary tables:

```sql
CREATE TABLE dogs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  breed TEXT,
  age INTEGER,
  gender TEXT,
  weight FLOAT,
  description TEXT,
  image_url TEXT,
  qr_code TEXT,
  owner_id UUID,
  is_missing BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

For more table schemas, see the `src/lib/supabase-schema.md` file.

### 4. Running the project

Once you've set up your environment variables, you can run the project:

```bash
npm run dev
```

And access the admin page at http://localhost:3000/admin to test your Supabase connection.

## Security Best Practices

- Never share your API keys or commit them to public repositories
- Add `.env.local` to your `.gitignore` file (already done in this project)
- For production, use environment variables in your deployment platform (Vercel, Netlify, etc.)
- Follow least privilege principles when setting up Row-Level Security in Supabase 